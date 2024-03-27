"use client";
import { useAuthState } from "@/contexts/LoginContext/context";
import { Error } from "@/components/UI/Error";
import FileUploader from "@/components/Subject/FileUploader";

export default function Subjects() {
   const { role, perms } = useAuthState();

   return <>{role === "admin" ? <FileUploader /> : <Error />}</>;
}
