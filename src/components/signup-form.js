import { useState } from 'react'
import Background from 'assets/signup-background.png'
import { useSignup } from '../hooks/useSignup'
import { useRouter } from 'next/router'

const styles = {
    Container: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: '100%',
        height: '60em',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    FormContainer: {
        width: '30%', 
        minWidth: '400px',
        maxWidth: '1000px',
        background: '#fff',
        height: 'fit-content',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '10px',
        padding: '4em'
        
    },

    signup: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',

    },

    inputField: {
        margin: '5px',
        padding: '7px',

    },

    feildLabel: {
        marginTop: "50px"
    }, 

    buttonInput: {
        marginTop: '40px',
        padding: '10px',
        border: 'none',
        borderRadius: '10px',
        // background: '#f02c56',
        color: "#fff",
        fontSize: '14px',
        cursor: 'pointer'
    },

    title: {
        fontSize: '24px',
    },

    error: {
        padding: '10px',
        background: '#ffefef',
        border: '1px solid #e7195a',
        color: '#e7195a',
        borderRadius: '4px',
        margin: '20px 0'
    },

    loadingContainer: {
        width: '100%',
        
    }
}

function LoadingSection () {
    return (
        <div id="preloader">
            <div id="loader"></div>
        </div>
    )
}

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()
    const router = useRouter()
    const [clicked, setClicked] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setClicked(true)
        console.log(email, password)
        let result = await signup(email, password)
        !result && router.push('/product')
        result = null
        setClicked(false)
    }

    return (
        <div style={styles.Container}>

            <div style={styles.FormContainer}>
                <form style={styles.signup} onSubmit={handleSubmit}>
                    <h3 style={styles.title}>Sign up</h3>

                    <label style={styles.feildLabel}>Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder={"Enter email"}
                        style={styles.inputField}
                        className="input-field"
                    />

                    <label style={styles.feildLabel}>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder={"Enter password"}
                        style={styles.inputField}
                        className="input-field"
                    />

                    <div style={styles.loadingContainer}>{clicked && <LoadingSection/>}</div>
                    <button style={styles.buttonInput} disabled={isLoading} className="submitBtn">Sign up</button>
                    {error && <div style={styles.error}>{error}</div>}
                </form>
            </div>
        </div>  
    )
}

export default Signup