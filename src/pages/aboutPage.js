import { Layout } from "../components/layout"
import { BannerAboutPage } from "../components/bannerAboutPage/bannerAboutPage";
import { Values } from "../components/values/values";
import Collapse from "../components/collapse/collapse";

export function About() {
    return (
        <Layout> 
           <BannerAboutPage/>
           <section className="values-section">
                <Values/>
                
           </section>
        </Layout>
    );
}