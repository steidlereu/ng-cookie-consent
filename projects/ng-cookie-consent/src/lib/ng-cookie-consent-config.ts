import { NgCookieConsentConfigSettingItem } from "./ng-cookie-consent-config-setting-item";

export interface NgCookieConsentConfig {
    id: string;
    host: string;
    cookieBannerHeaderText: string;
    cookieBannerTeaserHtml: string;
    cookieBannerSettingsHeaderText: string;
    cookieBannerAcceptButtonText: string;
    cookieBannerSettingsButtonText: string;
    cookieBannerAcceptSettingsButtonText: string;
    cookieBannerBackButtonText: string;
    cookieSettingsArray: NgCookieConsentConfigSettingItem[];
}