class PopUpInfo extends HTMLElement {
    constructor() {
        super();

        //shadow root
        this.attachShadow({
            mode: 'open'
        })

        //nested span elements
        const wrapper = document.createElement('span')
        wrapper.setAttribute('class','wrapper');
        const icon = wrapper.appendChild(document.createElement('span'));
        icon.setAttribute('class', 'icon')
        icon.setAttribute('tabindex', 0)

        //insert icon
        const img = icon.appendChild(document.createElement('img'))
        img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png';

        const info = wrapper.appendChild(document.createElement('span'))
        info.setAttribute('class', 'info')

        // put attribute content in info span
        info.textContent = this.getAttribute('data-text')

        // some css for shadow dom 
        const style = document.createElement('style')
        style.textContent = `
        .wrapper {
          position: relative;
        }
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        img {
          width: 1.2rem;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;
        // attaching created elements to shadow dom
        this.shadowRoot.append(style, wrapper);
    }
}

customElements.define('popup-info', PopUpInfo);

