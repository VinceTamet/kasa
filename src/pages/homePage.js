import { Layout } from '../components/layout';
import { BannerHomePage } from '../components/bannerHomePage/bannerHomePage';
import { Gallery } from '../components/gallery/gallery';
import logements from '../data/logements.json'

export function HomePage() {
    const firstSixLogements = logements.slice(0, 6);
    return (
        <Layout>
            <BannerHomePage/>
            <Gallery logements={firstSixLogements}/>
        </Layout>
    );
}
