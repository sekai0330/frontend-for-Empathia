import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Join the TALKHAPPI community by visiting our Instagram page! Feel free to post anything about us!',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat with Us',
      description:
        'Reach out to us on Instagram if you have any concerns or questions about the website!',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Project development',
      description:
        'Want to help revolutionalize mental health wellness with us? Reach out to us to inquire about joining!',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'https://www.instagram.com/talkhappi/',
      label: 'Instagram',
    },
    {
      path: 'https://www.linkedin.com/company/therahapi/mycompany/',
      label: 'Linkedin',
    },

  ],
};
