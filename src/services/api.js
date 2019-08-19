export function loadLists() {
    return [
      { 
        title: 'Tasks list', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Learn backend development',
            labels: ['#df4040'],
            user: 'https://icon-library.net/images/avatar-icon/avatar-icon-10.jpg'
          },
          {
            id: 2,
            content: 'Learn other frameworks such as Angular etcSeize other frameworks such as Angular etc',
            labels: ['#f4c957'],
            user: 'https://icon-library.net/images/avatar-icon/avatar-icon-5.jpg'
          },          
          {
            id: 4,
            content: 'Take course on "NextJS: How to use server-side rendering with ReactJS"',
            labels: ['#2490fc'],
            user: 'https://cdn.icon-icons.com/icons2/582/PNG/512/businness-man_icon-icons.com_55047.png'
          },
          {
            id: 10,
            content: 'Start Ract Course at Udemy',
            labels: [],
            user:'https://cdn.icon-icons.com/icons2/582/PNG/512/worker_icon-icons.com_55029.png'
          },        
        ]
      },
      { 
        title: 'Doing', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Learn about NodeJS',
            labels: [],
            user: 'https://icon-library.net/images/avatar-icon-free/avatar-icon-free-10.jpg'
          },
          {
            id: 3,
            content: 'Practice JavaScript, React js and React Native',
            labels: ['#f4c957'],
            user: 'https://icon-library.net/images/avatar-icon/avatar-icon-27.jpg'
          },
          {
            id: 5,
            content: 'Complete codecademy courses',
            labels: ['#2490fc'],
            user: 'https://icon-library.net/images/avatar-icon/avatar-icon-8.jpg'
          },
        ]
      },
      { 
        title: 'Paused', 
        creatable: false,
        cards: [         
          {
            id: 8,
            content: 'Create API Templates and Portfolio of API rest',
            labels: ['#f4c957'],
            user: 'https://cdn.icon-icons.com/icons2/582/PNG/512/woen-2_icon-icons.com_55032.png'
          },
          {
            id: 9,
            content: 'Test-Driven Development with JavaScript.',
            labels: [],
            user:''
          }
        ]
      },
      { 
        title: 'Completed', 
        creatable: false,
        done: true,
        cards: [  
          {
            id: 7,
            content: 'Deepen Responsive Designer Concepts',
            labels: ['#2490fc'],
            user: 'https://icon-library.net/images/avatar-icon/avatar-icon-7.jpg'
          },        
          {
            id: 12,
            content: 'Start Coders-lab course',
            labels: ['#f4c957'],
            user: ''
          },
          {
            id: 13,
            content: 'Learn front end programming, HTML, CSS, and JavaScript',
            labels: ['#df4040'],
            user:'https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png'
          }
        ]
      },
    ];
  }