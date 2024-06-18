import { useEffect } from "react"


const useLikeUnlike = () => {
  const token = localStorage.getItem('token')
    useEffect(()=>{
        const fetchLikeUnLike = () =>{
            var configLikes = {
                method: 'patch',
              maxBodyLength: Infinity,
                url: 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/6601941691640a0b5122cdd5',
                headers: { 
                  'x-auth-token':token
                }
              };
              try {
                
              } catch (error) {
                
              }
        }
    })
 
}

export default useLikeUnlike
