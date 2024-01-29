import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const FaceCard = ({ data }: any) => {
   const cardStyle = {
      maxWidth: 300,
      margin: "auto",
      marginTop: 16,
   };

   if (!data) {
      return null;
   }

   const {
      subjectId,
      customerType,
      accuracy,
      hasMask,
      image,
      address,
      timestamp,
   } = data;

   return (
      <Card style={cardStyle}>
         <CardMedia
            component="img"
            alt={`Image of ${subjectId}`}
            image={image}
         />
         <CardContent>
            <Typography variant="h6" component="div">
               {`Subject ID: ${subjectId}`}
            </Typography>
            <Typography variant="body2" color="textSecondary">
               {`Customer Type: ${customerType}`}
            </Typography>
            <Typography variant="body2" color="textSecondary">
               {`Accuracy: ${accuracy}%`}
            </Typography>
            <Typography variant="body2" color="textSecondary">
               {`Has Mask: ${hasMask ? "Yes" : "No"}`}
            </Typography>
            <Typography variant="body2" color="textSecondary">
               {`Address: ${address}`}
            </Typography>
            <Typography variant="body2" color="textSecondary">
               {`Timestamp: ${new Date(timestamp).toLocaleString()}`}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default FaceCard;
