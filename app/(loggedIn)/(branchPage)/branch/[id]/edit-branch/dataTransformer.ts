export const downsampleData = (data: any[], factor: number) => {
   const downsampled = [];
   for (let i = 0; i < data.length; i += factor) {
      const startIndex = i;
      const endIndex = Math.min(i + factor, data.length);
      const subset = data.slice(startIndex, endIndex);
      if (subset.length > 0) {
         const average =
            subset.reduce((sum, value) => sum + value, 0) / subset.length;
         downsampled.push(average);
      }
   }
   return downsampled;
};

export const formatTimestamps = (timestamps: any) => {
   const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   return timestamps.map((timestamp: any) => {
      const date: Date = new Date(timestamp);
      const formattedDate = `${date.getDate()} ${
         months[date.getMonth()]
      } ${date.getFullYear()}`;
      const formattedTime = `${date
         .getHours()
         .toString()
         .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

      return `${formattedDate} / ${formattedTime}`;
   });
};
