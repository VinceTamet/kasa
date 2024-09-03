import { Layout } from "../components/layout"
import { BannerAboutPage } from "../components/bannerAboutPage/bannerAboutPage";
import { Values } from "../components/values/values";

export function About() {
    return (
        <Layout> 
           <BannerAboutPage/>
           <section className="values-section">
                <Values/>
                {/* <div>List Valeures</div> */}
           </section>
        </Layout>
    );
}