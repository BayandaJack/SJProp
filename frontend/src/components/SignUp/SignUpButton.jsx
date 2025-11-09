export default function SignUpButton(){
    return (
        <button className="rounded-md border border-amber-300 w-1/2 hover:cursor-pointer" type="button"
         onClick={() => {
            window.location.href = "http://localhost:4000/auth/google";
        }}>
            Continue with Google
        </button>
    );
}