import { NgCookieConsentConfigSettingItem } from "./ng-cookie-consent-config-setting-item";

export interface NgCookieConsentConfig {
    id: string;
    cookieHost: string;
    cookieName: string;
    cookieDuration: number;
    cookiePath: string;
    cookieBannerHeaderText: string;
    cookieBannerTeaserHtml: string;
    cookieBannerSettingsHeaderText: string;
    cookieBannerAcceptButtonText: string;
    cookieBannerSettingsButtonText: string;
    cookieBannerAcceptSettingsButtonText: string;
    cookieBannerBackButtonText: string;
    cookieSettingsArray: NgCookieConsentConfigSettingItem[];
}