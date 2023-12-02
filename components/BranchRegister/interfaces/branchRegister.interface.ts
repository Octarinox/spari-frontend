export interface BranchRegisterInterface {
   branchId: string;
   address: string;
   password: string;
   users: {
      manager: any;
      headManager: any;
   };
   cams: {
      queue: any;
      face: {
         name: string;
         address: string;
      };
   };
   faceAiConfig: {
      alertMessage: string;
   };
   queueAiConfigs: {
      alertMessage: string;
      warningOnAmount: string;
   };
   serviceConfig: {
      faceDetect: {
         dashboardPopup: boolean;
         whatsApp: boolean;
         email: boolean;
      };
      queueDetect: {
         dashboardPopup: boolean;
         whatsApp: boolean;
         email: boolean;
      };
   };
}
