const myform=document.querySelector('myform');
const namePipeline=document.getElementById('namePipeline');
const projectName=document.getElementById('projectName');
const bucketName=document.getElementById('bucketName');
const cloudStorage=document.getElementById('cloudStorage');
const gcsCredentials=document.getElementById('gcsCredentials');
const runEvery=document.getElementById('runEvery');
const submitButton=document.getElementById('submitButton')

function alnum(name)
{
   var regEx = /^[0-9a-zA-Z]+$/;
   if(name.value.match(regEx))
     {
      return true;
     }
   else
     {
     return false;
     }
} 
submitButton.addEventListener('click',function(e){
        
        if(namePipeline.value.length<=4||projectName.value.length<=4||bucketName.value.length<=4||cloudStorage.value.length<=4||gcsCredentials.value.length<=4||runEvery.value.length<=4){
            Message="All inputs fields must have minimum of 5 charactters";
            e.preventDefault();
        }
        else{
            
            if(alnum(namePipeline) && alnum(projectName) && alnum(bucketName) && alnum(cloudStorage) && alnum(gcsCredentials)&&alnum(runEvery)){
                var Message="success";
            }
            else{
                Message="Avoid special characters"
                e.preventDefault();
            }
        }
        
    alert(Message);
}   
);