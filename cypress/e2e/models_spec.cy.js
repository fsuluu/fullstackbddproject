describe('Rails Models API Test & Visualizer', () => {
    const baseUrl = 'http://localhost:3000'  // Rails API
  
    it('User oluşturuyor', () => {
      cy.request('POST', `${baseUrl}/api/users`, { user: { name: 'Fatma' } })
        .then(res => {
          expect(res.status).to.eq(201)
          cy.visit('http://localhost:3001')  // React dashboard portu
          cy.window().then(win => win.addItem('user', res.body.name))
        })
    })
  
    it('Category oluşturuyor', () => {
      cy.request('POST', `${baseUrl}/api/categories`, { category: { name: 'Tech' } })
        .then(res => {
          expect(res.status).to.eq(201)
          cy.window().then(win => win.addItem('category', res.body.name))
        })
    })
  
    it('Post oluşturuyor', () => {
      cy.request('POST', `${baseUrl}/api/posts`, {
        post: { title: 'Test Post', body: 'Cypress ile body', user_id: 1, category_id: 1 }
      }).then(res => {
        expect(res.status).to.eq(201)
        cy.window().then(win => win.addItem('post', res.body.title))
      })
    })
  
    it('Comment oluşturuyor', () => {
      cy.request('POST', `${baseUrl}/api/comments`, {
        comment: { body: 'Harika!', user_id: 1, post_id: 1 }
      }).then(res => {
        expect(res.status).to.eq(201)
        cy.window().then(win => win.addItem('comment', res.body.body))
      })
    })
  
    it('Like oluşturuyor', () => {
      cy.request('POST', `${baseUrl}/api/likes`, {
        like: { user_id: 1, post_id: 1 }
      }).then(res => {
        expect(res.status).to.eq(201)
        cy.window().then(win => win.addItem('like', `User 1 liked Post 1`))
      })
    })
  })
  