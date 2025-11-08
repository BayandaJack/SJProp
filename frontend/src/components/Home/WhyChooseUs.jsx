import PromiseCard from "../DisplayCards/PromiseCard";

export default function WhyChooseUs(){
    return (
        <section>
            <h1 className="text-4xl font-bold text-red-500">Why Us?</h1>
            <section className="flex flex-row gap-2 justify-center m-6">
                <PromiseCard title="Trusted Agents" text="Verified and experienced agents." img="/trust.png"/>
                <PromiseCard title="Easy Communication" text="Chat directly with owners or agents." img="/comms.jpg"/>
                <PromiseCard title="Affordable Deals" text="Find your dream home within budget." img="/affordable.png"/>
            </section>
        </section>
    );
}