
export const sortSubjects = (subnames: any, response: any) => {
   let ret: any = {};
   subnames.forEach((el: any) => {
      ret[el] = []
   })
   response.faces?.forEach((el: any) => {
      if (ret[el.subject] !== undefined) {
         ret[el.subject].push(el.image_id)
      }
   })

   // let res: any = {};
   // response.faces?.forEach((el: any) => {
   //    if (res[el.subject] === undefined) {
   //       res[el.subject] = [el.image_id]
   //    } else {
   //       res[el.subject].push(el.image_id)
   //    }
   // });

   return ret;
}
