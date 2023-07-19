import React from "react";
import HeroMain from '../Components/HeroMain';
import BodyDescription from '../Components/BodyDescription';
import DetailsFree from "../Components/DetailsFree";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
import AccessSection from "../Components/AccessSection";
import TestInfinity from "../Components/TestInfinity"

export default function Homepage() {
    return (
        <>
            <HeroMain />
            <BodyDescription />
            <DetailsFree />
            <TestInfinity />
            <AccessSection />
            <CallToAction />
            <Footer />
        </>
    )
}