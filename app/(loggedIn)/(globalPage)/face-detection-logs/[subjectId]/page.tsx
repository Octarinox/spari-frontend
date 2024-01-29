"use client";

import { useParams } from "next/navigation";
import useFaceLogs from "@/shared/hooks/useFaceLogs";
import { useEffect, useState } from "react";
import FaceCard from "@/components/UI/FaceCard";

const Subject = () => {
   const { data }: any = useFaceLogs();
   const [subject, setSubject] = useState();
   const params = useParams();
   useEffect(() => {
      const subject = data?.find(
         (subject: any) => subject._id === params.subjectId
      );

      setSubject(subject);
   }, [data]);

   return (
      <>
         <FaceCard data={subject} />
      </>
   );
};

export default Subject;
