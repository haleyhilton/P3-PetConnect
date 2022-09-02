import React from 'react'
import './style.css'

export default function PostCard(props) {



    // Use form state to create blank form with click handles to generate the props, then send these down to the grid items on Profile. Need to talk to Backend boys about the Mutations




    // const [formState, setFormState] = useState({
    //     first: '',
    //     last: '',
    //     dob:'',
    //     zipCode: '',
        
    //     email: '',
    //     username: '',
    //     password: '',
    //   });
    //   const [addUser, { error, data }] = useMutation(ADD_USER);
    //   let navigate = useNavigate()
    //   const handleChange = (event) => {
        
    //     const { name, value } = event.target;
    //     console.log(name)
    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };




    //   const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);
    
    //     try {
    //       const { data } = await addUser({
    //         variables: { ...formState },
    //       });
    
    //       Auth.login(data.addUser.token);
    //       navigate.push('/profile')
          
    
    //     } catch (e) {
          
    //       console.error(e);
    //     }
    
    //   };


  return (




    <div>        
    <div id="myModal" class="modal">

        
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-inner-wrapper">
                


                <div>{props.name}</div>
                <div class="modal-inner-image"></div>
                <div>{props.description}
                </div>

            </div>

        </div>

    </div></div>
  )
}
