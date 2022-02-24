import TagManager from 'react-gtm-module';

const GoogleTagManagerConfigDataLayer = (ObjectDataLayer: any) => {
    TagManager.dataLayer({
        dataLayer : ObjectDataLayer
    })
};

const GoogleTagManagerConfigInitial = () => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID || '' })
}

export { GoogleTagManagerConfigDataLayer, GoogleTagManagerConfigInitial }
