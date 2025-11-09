import SignUpButton from "./SignUpButton";

export default function SignUpCard(){
    return (
        <div className="flex flex-col bg-white gap-3 items-center p-4 m-3 rounded-lg border border-gray-500 w-1/2">
            <p>This is a sign up card</p>
            <SignUpButton />
        </div>
    );
}