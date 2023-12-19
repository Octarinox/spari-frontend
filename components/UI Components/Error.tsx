export const Error: React.FC<any> = ({ message }) => {
   return (
      <div className="bg-red-200 p-4 rounded-md text-red-800 text-center w-full h-20">
         <p>{message || "Insufficient Permissions"}</p>
      </div>
   );
};
