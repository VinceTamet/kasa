import './bannerAboutPage.scss';
import bannerAbout from '../../assets/about-background.png'

export function BannerAboutPage() {
    return (
        <div className="banner about-banner"  style={{ backgroundImage: `url(${bannerAbout})` }}></div>
    );
}
