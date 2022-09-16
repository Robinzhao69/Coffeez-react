import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

const HomePage = () => {
    return(
        <>
            <Navigation />
            <Header 
                bigTitle="Coffeez"
                smallTitle="Coffee that will make you smile"
                buttonText="Order now"
            />
            <Section headerTitle="coffee">
                <Card text="The most fresh beans from in and outside the country!" image="beans.jpg"/>  
                <Card text="Freshly grinded coffee with the flavour intact!" image="machine.jpg"/>  
                <Card text="smell and taste different aromas from around the world. Chocolate, flowers, wood, you name it." image="latte-art.jpg"/>
                <Card text="Fair traded coffee, paid with real money and love for our employees!" image="cold-brew.jpg"/>
            </Section>
            <Section headerTitle="cap">
                <Card />  
                <Card />  
                <Card />
                <Card />
            </Section>
        </>
    )
}

export default HomePage