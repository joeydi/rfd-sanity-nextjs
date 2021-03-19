export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6054084033ebf64fea0e8d13',
                  title: 'Sanity Studio',
                  name: 'rfd-sanity-nextjs-studio',
                  apiId: '7dcf3667-a5fa-4e21-a623-c47d02711874'
                },
                {
                  buildHookId: '605408402ae6e34eba4c199d',
                  title: 'Landing pages Website',
                  name: 'rfd-sanity-nextjs',
                  apiId: '18450857-a7a6-4443-80bb-94bbc36c9af6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joeydi/rfd-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rfd-sanity-nextjs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
