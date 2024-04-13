import { defineStore } from 'pinia'

export const useInfoStore = defineStore('information',{
  
            state:()=>{
              return{
                
                log:''
          
            }
            
        },

          actions:{
           
                  
              AddInfo(FormData){
                 this.log=FormData
              },
              delete(){
                this.log=null
              }
            }
            
           
})
