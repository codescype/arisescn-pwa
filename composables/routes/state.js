import {
  mdiHome,
  mdiWeb,
  mdiMusicBox,
  // mdiPlaylistMusic,
  mdiHandHeart,
  // mdiRadio,
  // mdiFrequentlyAskedQuestions,
  mdiInformationVariant,

  // socialIcons
  mdiYoutube,
  // mdiSpotify,
  // mdiItunes,
  mdiTelegram,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiMusicNoteEighth,
  mdiRadio
  // mdiWhatsapp
} from '@mdi/js'

export default {
  all: [
    /* {
      title: 'Welcome',
      icon: mdiMoonNew,
      route: '/welcome',
      type: ['basic', 'other']
    }, */
    {
      title: 'Home',
      icon: mdiHome,
      route: '/',
      routeType: 'nuxt-link',
      type: ['basic', 'main']
    },
    // {
    //   title: 'Listen Online',
    //   icon: mdiRadio,
    //   route: '/#live',
    //   type: ['other', 'main'],
    //   access: ['non-auth']
    // },
    {
      title: 'Join us Live Online',
      icon: mdiWeb,
      route: '/#join-us-live-online',
      type: ['basic', 'main'],
      access: ['non-auth']
    },
    {
      title: 'Messages',
      icon: mdiMusicBox,
      route: '/#messages',
      type: ['basic', 'main'],
      access: ['non-auth']
    },
    // {
    //   title: 'Playlists',
    //   icon: mdiPlaylistMusic,
    //   route: '/playlists',
    //   type: ['other', 'main'],
    //   access: ['non-auth']
    // },
    {
      title: 'Give Online',
      description: 'Tithes, Offering, Partnership Seeds, etc.',
      icon: mdiHandHeart,
      route: '/#give-online',
      type: ['other', 'main'],
      access: ['non-auth']
    },
    // {
    //   title: 'FAQ',
    //   icon: mdiFrequentlyAskedQuestions,
    //   route: '/faq',
    //   type: ['other', 'main']
    // },
    {
      title: 'About',
      icon: mdiInformationVariant,
      route: '/about',
      type: ['basic', 'main']
    },

    // social links
    {
      title: 'YouTube',
      route: 'https://www.youtube.com/c/AriseSCN',
      icon: mdiYoutube,
      type: ['social']
    },
    {
      title: 'Facebook',
      route: 'https://facebook.com/ariseSCN',
      icon: mdiFacebook,
      type: ['social']
    },
    {
      title: 'Instagram',
      route: 'https://instagram.com/ariseSCN',
      icon: mdiInstagram,
      type: ['social']
    },
    {
      title: 'Tiktok',
      route: 'https://tiktok.com/@ariseSCN',
      icon: mdiMusicNoteEighth,
      type: ['social']
    },
    {
      title: 'Twitter',
      route: 'https://twitter.com/ariseSCN',
      icon: mdiTwitter,
      type: ['social']
    },
    /*  {
      title: 'WhatsApp',
      route: 'https://wa.me/message/QZK7TXSI7UBUF1',
      icon: mdiWhatsapp,
      type: ['social']
    }, */
    {
      title: 'Telegram',
      route: 'https://telegram.com/ariseSCN',
      icon: mdiTelegram,
      type: ['social']
    },
    {
      title: 'Mixlr',
      route: 'https://arisescn.mixlr.com/',
      icon: mdiRadio,
      type: ['social']
    }

    // {
    //   text: 'Contact',
    //   link: '/contact'
    // }
  ],

  social: [
    {
      text: 'YouTube',
      link: 'https://www.youtube.com/c/AriseSCN',
      icon: mdiYoutube
    },
    {
      text: 'Facebook',
      link: 'https://facebook.com/ariseSCN',
      icon: mdiFacebook
    }
  ]
}
