import { useNavigate, useParams } from "react-router-dom";
import { AddThoughtsContainer } from "./ManageThoughtsStyled";

import {
    createThought,

    deleteThought,
  editThought,
  getThoughtById,
} from "../../services/postsServices";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useEffect } from "react";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { thoughtsSchema } from "../../schemas/thoughtsSchema";

export function ManageThoughts() {
  const { action, id } = useParams();
  const navigate = useNavigate();

  const {
    register: registerThought,
    handleSubmit: handleRegisterThoughts,
    formState: { errors: errorsRegisterThoughts },
    setValue,
  } = useForm({ resolver: zodResolver(thoughtsSchema) });

  async function registerThoughtsSubmit(data) {
    try {
      await createThought(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function editThoughtsSubmit(data) {
    try {
      await editThought(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function findThoughtById(id) {
    try {
      const { data } = await getThoughtById(id);
      setValue("title", data.title);
      setValue("text", data.text);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteThoughtsSubmit() {
    try {
      await deleteThought(id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (action === "edit" || action === "delete") {
        findThoughtById(id);
    }
  }, []);

  return (
    <AddThoughtsContainer>
      <h2>
        {action === "add"
          ? "Adicionar"
          : action === "edit"
          ? "Atualizar"
          : "Apagar"}{" "}
        Pensamento
      </h2>
      <form
        onSubmit={
            action == "add"
            ? handleRegisterThoughts(registerThoughtsSubmit)
            : action === "edit"
            ? handleRegisterThoughts(editThoughtsSubmit)
            : handleRegisterThoughts(deleteThoughtsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Titulo"
          name="title"
          register={registerThought}
          disabled={action === "delete"}
        />
        {errorsRegisterThoughts.title && (
          <ErrorSpan>{errorsRegisterThoughts.title.message}</ErrorSpan>
        )}
       
        <Input
          type="text"
          placeholder="Texto"
          name="text"
          register={registerThought}
          isInput={false}
          disabled={action === "delete"}
        />
        {errorsRegisterThoughts.text && (
          <ErrorSpan>{errorsRegisterThoughts.text.message}</ErrorSpan>
        )}

              <Button
                  
          type="submit"
          text={
            action === "add"
              ? "Adicionar"
              : action === "edit"
              ? "Atualizar"
              : "Apagar"
          }
        />
      </form>
    </AddThoughtsContainer>
  );
}