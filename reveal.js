
window.revelar = ScrollReveal({ reset: true })

// TOPO DO SITE //
revelar.reveal('.efeito-txt-topo',
    {
        duration: 2000,
        distance: '90px'
    })

revelar.reveal('.efeito-img-topo',
    {
        duration: 2000,
        distance: '90px',
        delay: 500
    })

// OS TITULOS DAS SESSÕES

revelar.reveal('.titulo',
    {
        duration: 2000,
        distance: '90px'
    })

// SESSÃO DO PORTFOLIO//
revelar.reveal('.efeito-projeto1',
    {
        duration: 2000,
        distance: '90px',
        delay: 500
    })

revelar.reveal('.efeito-projeto2',
    {
        duration: 2000,
        distance: '90px',
        delay: 1000
    })

revelar.reveal('.efeito-projeto3',
    {
        duration: 2000,
        distance: '90px',
        delay: 1500
    })

// SESSÃO SOBRE
revelar.reveal('.efeito-img-sobre',
    {
        duration: 2000,
        distance: '90px',
        delay: 500,
        origin: 'left'
    })

revelar.reveal('.efeito-txt-sobre',
    {
        duration: 2000,
        distance: '90px',
        delay: 1000,
        origin: 'right'
    })