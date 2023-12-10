import { BaseStyle } from "../base/BaseStyle";
import { IMPORTANT } from "../base/contants";
// import { DefaultUtilityStyles } from "../utility/DefaultUtilityStyles";

export class SmallSCStyles extends BaseStyle {
   constructor() {
      super();
     
      // let defaultUtilityStyles = new DefaultUtilityStyles().style;


      this.style = {
         /**************************************************
          * INPUTS
          *************************************************/
         scInputsButton: {},
         scInputsTextField: {},
         /**************************************************
          * DATA DISPLAY
          *************************************************/
         /**************************************************
          * FEEDBACK
          *************************************************/
         scFeedbackDialog: { minWidth: "20%" + IMPORTANT, minHeight: "30%" + IMPORTANT },
         /**************************************************
          * SURFACES
          *************************************************/
         /**************************************************
          * NAVIGATION
          *************************************************/
         scNavigationTab: {},
         scNavigationTabs: {}
         /**************************************************
          * LAYOUTS
          *************************************************/
         /**************************************************
          * UTILS
          *************************************************/
      };
   }
};
