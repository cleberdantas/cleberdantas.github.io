---
layout: post
title: "Optimization and performance tips for Web Apps with ASP.NET"
tags: [tips]
---

Hey there,

Last saturday (05/25/2013) I was at http://www.visualstudiosummit.com.br (The conference took place at Microsoft Brazil).

<figure>
  <a href="/images/evento.jpg"><img src="/images/evento.jpg"></a>
  <figcaption><a href="/images/evento.jpg" title="Conference">Microsoft Conference</a>.</figcaption>
</figure>

I had the opportunity to talk a little bit about Web Performance. I showed to the audience some tips about optimization and performance for web apps. Below you can see the slide deck (slides in portuguese) and the recorded video (also in portuguese).

<div class="player embed_player   lightPlayer fluidImage fluidLayout presentation_player hide_like_save_player" id="player" style="overflow: hidden;">
        <div id="stage" class="stage" style="height: 318px; max-height: 318px; line-height: 318px;">
          <a class="exit-fullscreen j-exit-fullscreen"></a>
          <div class="slide_container jsplBgColorBigfoot wide_img">
                  <div data-index="1" class="slide show" slidenumber="1" style="min-height: 0px;">
                    <img id="img_slide_image" class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-1-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-1-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-1-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-1-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="2" class="slide" slidenumber="2" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-2-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-2-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-2-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-2-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="3" class="slide" slidenumber="3" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-3-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-3-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-3-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-3-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="4" class="slide" slidenumber="4" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-4-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-4-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-4-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-4-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="5" class="slide" slidenumber="5" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-5-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-5-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-5-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-5-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="6" class="slide" slidenumber="6" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-6-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-6-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-6-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-6-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="7" class="slide" slidenumber="7" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-7-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-7-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-7-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-7-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="8" class="slide" slidenumber="8" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-8-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-8-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-8-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-8-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="9" class="slide" slidenumber="9" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-9-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-9-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-9-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-9-320.jpg?cb=1369840191">
                  </div>
                  <div data-index="10" class="slide" slidenumber="10" style="min-height: 0px;">
                    <img class="slide_image" src="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-10-638.jpg?cb=1369840191" data-normal="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-10-638.jpg?cb=1369840191" data-full="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-10-1024.jpg?cb=1369840191" data-small="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/85/slide-10-320.jpg?cb=1369840191">
                  </div>
          </div>
        </div><div class="leftpoint pointly"></div><div class="rightpoint pointly"></div> <!-- end stage -->
        <div class="toolbar_wrapper">
          <div class="toolbar normal">
            <!--[if IE 7]>
  <style>
    .toolbar .navActions { position: relative; top: -28px; }
    div.toolbar .nav {margin-left : 37%; }
  </style>
<![endif]-->
  <a href="#" class="sprite btnViewOnSS" title="View on SlideShare" style="display: inline;">&nbsp;</a><!-- view on SS -->
  <div class="nav">
    <a href="#btnFirst" class="btnFirst" title="First Slide" rel="nofollow">«</a>
    <a href="#btnPrevious" class="btnPrevious" title="Previous Slide" rel="nofollow">‹</a>
    <a href="#btnNext" class="btnNext" title="Next Slide" rel="nofollow">›</a>
    <a href="#btnLast" class="btnLast" title="Last Slide" rel="nofollow">»</a>
  </div>
  <div class="navActions">
    <a href="#" class="btnFullScreen" title="View Fullscreen" rel="nofollow">&nbsp;</a>
    <a href="#" class="btnLeaveFullScreen" title="Exit Fullscreen" rel="nofollow" style="display: none;">&nbsp;</a>
    <label class="goToSlideLabel"><input type="text" name="goToSlide" value="1"><span>/10</span></label>
  </div>

          </div>
        </div> <!-- end toolbar -->
        <div id="lastScreen" class="hide">
          <div class="lastScreen">
  <div class="jsplLastScreenOverlay j-last-screen-overlay"></div>
  <div class="pro-overlay j-lastscreen">
    <div class="proSharingText">Like this ? Why not share!</div>
    <ul class="lastActions j-last-screen-actions">
      <li class="share-cta j-share-cta lastscreen-share-cta"><a class="share-btn"><span class="lastScreen-sprite"></span>Share</a></li>
      <li class="email-cta j-email-cta"><a class="email-btn"><span class="lastScreen-sprite"></span>Email</a></li>
      <li class="replay last">
        <a class="replay-btn lastScreenReplay j-tooltip j-last-screen-replay" data-original-title="View again" title="View again">
          <span class="lastScreen-sprite">&nbsp;</span>
        </a>
      </li>
      <li class="close-btn lastScreen-sprite j-lastscreen-close">
        <a>&nbsp;</a>
      </li>
    </ul>
    <div class="related-presentations j-lastscreen-related">
      <ul class="presentation-list">
        <li>
         <a href="/QuartelDigital/marketing-digital-de-moda-quartel-digital" title="Curso Marketing Digital de Moda - R..." target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/marketingdigitaldemoda-quarteldigital-130518170027-phpapp01-thumbnail.jpg?cb=1368914773" alt="Curso Marketing Digital de Moda - R...">
           <span class="presentation-meta">
             <span class="title">Curso Marketing Digital de Moda - R...</span>
             <span class="author">by&nbsp;Quartel Digital</span>
             <span class="view-count">680&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/Sampetruda/aula-01-curso-tcnico" title="Aula 01 - Curso Técnico" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/aula-01-curso-tcnico4693-thumbnail.jpg?cb=1272541977" alt="Aula 01 - Curso Técnico">
           <span class="presentation-meta">
             <span class="title">Aula 01 - Curso Técnico</span>
             <span class="author">by&nbsp;Sampetruda</span>
             <span class="view-count">698&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/ferlede/djoaoii-avaliacao-portateis" title="D. João II - Avaliacao do Projeto d..." target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/djoaoiiavaliacaoportateis-1277587940-phpapp02-thumbnail.jpg?cb=1364231559" alt="D. João II - Avaliacao do Projeto d...">
           <span class="presentation-meta">
             <span class="title">D. João II - Avaliacao do Projeto d...</span>
             <span class="author">by&nbsp;Fernanda Ledesma</span>
             <span class="view-count">306&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/EduardoBonfandini/desenvolvimento-para-a-web-usando-html-e-css" title="Desenvolvimento para a web usando h..." target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/desenvolvimentoparaawebusandohtmlecss-131024095235-phpapp02-thumbnail.jpg?cb=1382626430" alt="Desenvolvimento para a web usando h...">
           <span class="presentation-meta">
             <span class="title">Desenvolvimento para a web usando h...</span>
             <span class="author">by&nbsp;Eduardo Bonfandini</span>
             <span class="view-count">401&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/demianveiga/mobile-2010-5109460" title="Mobile 2010" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/mobile2010-12833802626137-phpapp01-thumbnail.jpg?cb=1289055412" alt="Mobile 2010">
           <span class="presentation-meta">
             <span class="title">Mobile 2010</span>
             <span class="author">by&nbsp;Demian Luiz Veiga</span>
             <span class="view-count">273&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/elenilsonvieira/javame" title="JavaME" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/desenvolvimentoparadispositivosmveisutilizandojavameminicursoufpb-campusiv-090816212044-phpapp02-thumbnail.jpg?cb=1250475661" alt="JavaME">
           <span class="presentation-meta">
             <span class="title">JavaME</span>
             <span class="author">by&nbsp;Elenilson Vieira</span>
             <span class="view-count">2407&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/concursovirtual/edital-detran" title="Edital DETRAN RJ 2013" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/editaldetran-130524100408-phpapp01-thumbnail.jpg?cb=1369408050" alt="Edital DETRAN RJ 2013">
           <span class="presentation-meta">
             <span class="title">Edital DETRAN RJ 2013</span>
             <span class="author">by&nbsp;Concurso Virtual</span>
             <span class="view-count">11699&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/famecos2013B/midia2-aula-12013-2" title="Midia2 aula 1(2013 2)" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/midia2aula12013-2-130731102046-phpapp02-thumbnail.jpg?cb=1375284423" alt="Midia2 aula 1(2013 2)">
           <span class="presentation-meta">
             <span class="title">Midia2 aula 1(2013 2)</span>
             <span class="author">by&nbsp;famecos2013B</span>
             <span class="view-count">214&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/elmes/gesto-de-documentos-uma-das-solues-do-grupo-gci" title="Gestão de Documentos: Uma das soluç..." target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/catalogoseecm-12998087326221-phpapp01-thumbnail.jpg?cb=1299808873" alt="Gestão de Documentos: Uma das soluç...">
           <span class="presentation-meta">
             <span class="title">Gestão de Documentos: Uma das soluç...</span>
             <span class="author">by&nbsp;elmes</span>
             <span class="view-count">346&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/elenilsonvieira/javame-aula-2" title="JavaME - Aula 2" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/desenvolvimentoparadispositivosmveisutilizandojavameminicursounip-aulaii-090719231135-phpapp02-thumbnail.jpg?cb=1248063109" alt="JavaME - Aula 2">
           <span class="presentation-meta">
             <span class="title">JavaME - Aula 2</span>
             <span class="author">by&nbsp;Elenilson Vieira</span>
             <span class="view-count">1435&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/killerlsk8l/tcc201301-marcos-pessoaorientador-tayana" title="Exercise Planning - Uma ferramenta ..." target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/tcc201301-marcospessoa-orientadortayana-140129111734-phpapp01-thumbnail.jpg?cb=1391016884" alt="Exercise Planning - Uma ferramenta ...">
           <span class="presentation-meta">
             <span class="title">Exercise Planning - Uma ferramenta ...</span>
             <span class="author">by&nbsp;Marcos Pessoa</span>
             <span class="view-count">162&nbsp;views</span>
           </span>
         </a>
        </li>
        <li>
         <a href="/AmazonWebServicesLATAM/keynote-aws-roadshow-campinas-2013" title="Keynote AWS Roadshow Campinas 2013" target="_blank">
           <img src="//cdn.slidesharecdn.com/ss_thumbnails/awsroadshow2013-campinas-130901163605-phpapp02-thumbnail.jpg?cb=1378071423" alt="Keynote AWS Roadshow Campinas 2013">
           <span class="presentation-meta">
             <span class="title">Keynote AWS Roadshow Campinas 2013</span>
             <span class="author">by&nbsp;Amazon Web Servic...</span>
             <span class="view-count">1345&nbsp;views</span>
           </span>
         </a>
        </li>
      </ul>
    </div>

  </div> <!-- end of div class pro-overlay -->
  <div class="j-modal-share modal-share mobile-hide" style="display: none;" id="last-screen-modal-share" data-ga-track-category="" data-ga-track-action="">
  <div class="j-modal-popup modal-popup">
    <div class="j-modal-close modal-close"></div>
    <div class="j-modal-content modal-content" id="modal-content" data-slideshowid="">
      <header class="j-tabs tabs">
        <a id="button-share-tab" class="selected j-button-share-tab">Share</a>
        <a id="button-embed-tab" class="j-button-embed-tab">Embed</a>
        <hr class="divider">
      </header>
      <div class="j-share-tab share-tab">
        <section class="section share-social">
          <div>
            <ul class="j-share-social-list share-social-list">
              <li class="facebook">
                <div class="social-hover">
                  <a class="share-link" rel="nofollow" data-url="http://www.slideshare.net/cleberdantas/dicas-de-performance-web-vssummit?ref=http://www.cleberdantas.com/en/2013/05/optimization-and-performance-tips-for-web-apps-with-aspnet/">Facebook</a>
                </div>
              </li>
              <li class="twitter">
                <div class="social-hover">
                  <a class="share-link" rel="nofollow" data-url="http://www.slideshare.net/cleberdantas/dicas-de-performance-web-vssummit?ref=http://www.cleberdantas.com/en/2013/05/optimization-and-performance-tips-for-web-apps-with-aspnet/" data-text="Dicas de otimização e performance de aplicações Web com ASP.NET  #frontend #performance" data-related="" data-via="SlideShare">Twitter</a>
                </div>
              </li>
              <li class="linkedin">
                <div class="social-hover">
                  <a class="share-link" rel="nofollow" data-url="http://www.slideshare.net/cleberdantas/dicas-de-performance-web-vssummit?ref=http://www.cleberdantas.com/en/2013/05/optimization-and-performance-tips-for-web-apps-with-aspnet/" data-text="Dicas de otimização e performance de aplicações Web com ASP.NET  by Cleber Dantas via slideshare">LinkedIn</a>
                </div>
              </li>
              <li class="googleplus">
                <div class="social-hover">
                  <a class="share-link" rel="nofollow" data-url="http://www.slideshare.net/cleberdantas/dicas-de-performance-web-vssummit?ref=http://www.cleberdantas.com/en/2013/05/optimization-and-performance-tips-for-web-apps-with-aspnet/">Google</a>
                </div>
              </li>
              <li class="pinterest">
                <div class="social-hover">
                  <a class="share-link" rel="nofollow" data-url="http://www.slideshare.net/cleberdantas/dicas-de-performance-web-vssummit?ref=http://www.cleberdantas.com/en/2013/05/optimization-and-performance-tips-for-web-apps-with-aspnet/" data-media="http://image.slidesharecdn.com/dicasdeperformanceweb-vssummit-130529100816-phpapp02/95/slide-1-638.jpg?cb=1369840191" data-description="Dicas de otimização e performance de aplicações Web com ASP.NET  by Cleber Dantas via slideshare" data-pin-do="buttonPin" data-pin-config="above">Pinterest</a>
                </div>
              </li>
              <li class="wordpress">
                <div class="social-hover">
                  <a rel="nofollow">Wordpress</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="share-link-container">
            <input type="input" class="j-share-link-url" id="share-link-url" data-ga="link" readonly="">
          </div>
        </section>
        <hr class="divider">
        <section class="section share-email">
          <header>
            <h3>Email this SlideShare</h3>
            <span class="j-email-flash email-flash"></span>
          </header>
          <form id="share-email-form" class="j-share-email-form">
            <input id="share-email-to" data-ga="to" class="j-share-email-to j-email-clear" name="recipients" type="email" placeholder="Recipient Email or Username" required="">
            <input id="share-email-name" data-ga="name" class="j-share-email-name j-email-clear" name="name" type="text" placeholder="Your Name" required="">
            <textarea id="share-email-msg" data-ga="msg" class="j-share-email-msg j-email-clear" name="msg" placeholder="I think you will find this useful."></textarea>
            <div class="share-email-expand">
              <div id="add-msg" class="j-add-msg" data-ga="add-msg">Add Message</div>
              <input id="share-email-send" data-ga="send" class="j-share-email-send button" type="submit" value="Send">
            </div>
          </form>
          <div id="email-sent" class="j-email-sent section"><div>
            <span class="success-text">Email Sent!</span>
            <button id="send-another-email" data-ga="another-email" class="j-send-another-email button btn">Send Another</button></div></div>
        </section>
      </div>
      <div class="j-embed-tab embed-tab">
        <section class="j-share-embed section share-embed">
          <textarea id="share-embed-link" class="j-share-embed-link" readonly="" data-ga="link"></textarea>
          <div class="share-embed-options">
            <div class="embed-use-ssl" title="Check only if the site on which the embed code will be placed begins with 'https://'">
              <input type="checkbox" name="use-ssl" class="j-embed-use-ssl-cbox embed-use-ssl-cbox" data-ga="ssl">
              <span>Generate embed code for https site</span>
            </div>
            <div class="embed-size">
              <span class="title">Size (px):</span>
              <select class="j-embed-size-picker embed-size-picker" id="embed-size-picker" data-ga="size-picker"></select>
            </div>
            <div class="embed-start">
              <span class="title">Start on Slide:</span>
              <input class="j-embed-start-picker embed-start-picker" id="embed-start-picker" pattern="\d+" data-ga="start-picker" value="1">
            </div>
            <div class="embed-show-related">
              <input type="checkbox" name="related-content" checked="checked" class="j-embed-related-cbox embed-related-cbox" data-ga="related">
              <span>Show related SlideShares at end</span>
            </div>
          </div>
        </section>
        <hr class="divider">
        <section class="section share-wp">
          <span>Shortcode for WordPress.com blogs</span>
            [ <a href="http://help.slideshare.com/entries/20117147-can-i-embed-slideshare-presentations-in-wordpress-blogs-or-which-embed-code-should-i-use-for-my-word" target="_blank" rel="nofollow">?</a> ]
          <input type="text" name="embed-code" id="share-embed-wp" value="" readonly="readonly" class="j-share-embed-wp text quiet h-wpembedcode" data-ga="wp-link">
        </section>
      </div>
    </div>
  </div>
</div><!-- share modal -->

</div><!-- last screen ends here -->

        </div>
        <div class="image_maps"></div>
      <div class="action-btns-container persistent">
    <a rel="nofollow" title="Like this presentation" href="/signup?from_source=http%3A%2F%2Fwww.slideshare.net%2Fslideshow%2Fembed_code%2F22136693" target="_blank" class="action-btn favorite j-favorite ss-action" data-ssid="22136693" data-target="#login_modal">
      <span class="action-btn-icon"></span>
      <span class="action-btn-text">Like</span>
    </a>

  <a rel="nofollow" href="#" title="Share this presentation" class="action-btn share j-share" data-ssid="22136693">
    <span class="action-btn-icon"></span>
    <span class="action-btn-text">Share</span>
  </a>

    <a rel="nofollow" href="/signup?from_source=http%3A%2F%2Fwww.slideshare.net%2Fslideshow%2Fembed_code%2F22136693" target="_blank" title="Save this presentation" class="action-btn save j-save ss-action" data-target="#login_modal">
      <span class="save action-btn-icon"></span>
      <span class="action-btn-text">Save</span>
    </a>
</div></div>

<div><iframe src="//www.youtube.com/embed/EVhc39XOeAg" height="315" width="560" allowfullscreen="" frameborder="0"></iframe></div>

Stay tuned