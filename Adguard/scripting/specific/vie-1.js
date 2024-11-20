/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[id^=\"adm-slot\"]",".qc",".banner-bottom","#qc_clgt",".advertisement","#ads-1xbet-catfish,\n#popup-1720497466,\n.banner728,\n.container > div[style^=\"height: 228px\"]",".float-ck-center-lt","#custom_html-42","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#hide_float_right","#catfish",".mp-adz","#overlay","#banner","#pm_quangcao",".sda-catfish","#adspm4u",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".w1e48c4420b7073bc11916c6c1de226bb","#f186fb23a33995d91ce3c2212189178c8","#preload","#haun-player > div[style],\n#primary-nav > div[style],\n.separator","#mp-preload-popup-overlay","#xs-addd0","#popup-giua-man-hinh",".ad-container","#quangcaopc","#wap_bottombanner",".c-ad,\n.container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".marquee-container",".company","div[id^=\"dnn_\"]",".code-block-1.code-block,\n.navbar-container + .container",".container > .row > center","[id^=\"Balloon_\"]",".footer-banner",".btn-odds",".btn-od",".d-lg-flex.d-none.p-0.company.flex-1.table",".btn-action,\n.btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item:has(a[rel=\"nofollow\"]),\n.topButton,\n.widget_offer,\nheader > .container","a[rel=\"nofollow\"]","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".match-detail__offer",".offer__btn",".sk_balloon",".menu-top-nha-cai",".menu-cuoc-8xbet","#bar_float_r,\n.quangcaomb",".toogle-ads",".box-ads,\n.linkBanner","#floating_ads_bottom_textcss_container,\n.module_home_ads",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".sda-preload-popup,\n.sda-preload-popup-overlay",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".no-auto-popup","#player + div[id],\n.playover",".jw-logo","#fbox-background",".gnarty-offads","#sn-AnchorAd,\n.pAd,\n.relatedPostsAd,\ndiv.pAdin",".adNative",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".block:has([data-adaptive])",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".widget.widget_text","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text",".div_box_adv",".alldiv ~ div[class]",".chapter-content .min-h-\\[275px\\]","[id$=\"bnr\"]",".top-right",".line-ads",".popup",".banner-ads","div#recent-content:nth-of-type(1)",".adsbygoogle","#bannerContainer1,\n#bannerContainer2,\n#sp-wrapper-hovering-format,\n.wam-banner,\ncenter:has(.adsbygoogle)","div.ad",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\na[rel=\"noopener noreferrer nofollow\"],\ndiv[style=\"margin:6px 0px 6px 0px\"]","#antiblocker,\n#antiblocker_underplayer","#topbanner",".btn_small_fix_container",".ads-home-feed",".banner-bot-mobile,\n.banner-top-mobile,\n.preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]",".info-footer:nth-child(4)","#countdown,\n.section-gqc1,\ndiv[style=\"margin: 10px 0 5px 0; min-height: 250px;\"]","[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed","#mp-adx-b32","[class^=\"box_adv_ele\"]","#_pop-nettruyenww-15,\n#catfish-content,\n#pop_nettruyenww",".banner","#_pop-nettruyenx-13","#banner-qc_outstream,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco",".BanerTop100",".banner-container",".adv-300-right","#mobile_content_top","#p-GMH","#fakeDown","#anchor-ad",".aSlP,\n.bef,\n.hmvD",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox","#scriptDiv",".stream-item","#footer-widget-area",".google-auto-placed",".box,\n.pum","div#adsChapterTop","#ad_info_top,\n#catfishAd,\n#floating-banner-left,\n#floating-banner-right,\n#popup-truyenqq,\n#popup-truyenqq-home,\n.ads-banner,\ndiv#ad_info",".sticky-footer",".footer-info",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wtt-ads","#ouibounce-modal",".pum-overlay",".float-right","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".btn-bet",".active.bg-overlay","#catfish-ads",".banner-ads-cs",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".code-block-8.code-block,\n.ez-video-wrap","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".pc-catfixx",".a-header,\n.apu,\n.header","#myModal,\ndiv[id^=\"adsphim-\"]",".v4j-watch-1.v4j-content,\nbody > div[class]","#top_oddd",".underplayer_btn","a[rel=\"nofollow sponsored\"]","#footer_fixed_ads",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".module_single_ads",".ff-banner","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative","#backgroundPopupp,\n#popupContact","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div","div[class*=\"size-\"]","#m-bet",".fade.show,\n.ibs-bet",".btn-betnow",".box-host,\n.btn-bet-top,\n.item-betnow",".topbanner","#top_addd",".btn-fanpage.btn-default.btn-block.btn","[onclick^=\"__a.hide\"],\ndiv:has([class$=\"-modal\"])","#popup_banner_beta",".hd-tube-desktop,\n.hd-tube-mobile",".popUpBannerBox","#menubentrai,\n.gnartyx-offads",".bnqcclm",".adsphim-mobile-popup",".ad-pin-right-bottom",".adv","[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","#mp-preload-pp-overlay,\n.adpl",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".no-ads,\n.parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".sticky",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]","#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.bookmaker-selector-container,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.gmd-match-footer__odds,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\n.nav-wrap > a[rel=\"nofollow\"],\na.d-lg-none.d-block:nth-of-type(2)",".cashfish",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".grid-match__footer,\n.odds-comp,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".wppopups-whole","#iklan-atas-wrapper","#top-banner-pc","#sponsor-balloon",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1","#ads_location,\n.block.ad",".truct-catfish,\n.truct-widget",".chat-header,\n[href=\"https://8xbe52.com\"]","#pc-preload-modal,\n.quang-cao","#popup",".in.fade.modal-backdrop",".top-float-ck",".btm_bar",".footer-fixed-br-container",".banner-preload,\n.catfish-top",".catfish-bottom","#adx,\ndiv.banner-catfish-bottom","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".link-gold,\n[id^=\"banner\"]","iframe[src*=\"ads\"]",".banner-shopee,\na[href^=\"https://shope.ee\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#qc-kpgame","#left_ads_float,\n#right_ads_float",".banner_top","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\n.mobile-catfix,\n.pc-catfix,\ndiv[id^=\"preload-\"],\nmobile-catfix","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless",".code-block",".ads-pc,\n.ads-sp",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".catfix",".xx-ads","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".modal",".grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo-inner,\n.show.fade,\na[href^=\"/go\"]",".mmo",".btnz",".modal-backdrop.show",".fixed-bottom,\n.popup-banners",".pc_catfix_adv",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating",".catfish-ck",".adx1","#ab_ctl,\n.bannerads",".banner_site,\n.notify_auto,\n.sidebar_box_gray","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#rich-media-banner-ads,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250",".Notices.PanelScroller","div[class*=\"qca\"]",".content_middle_rightbar","#pc-top-banner,\n#quang-cao","winbox-1",".banners","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#popup_fi","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#idAdLink","#closeAds",".qc-inner,\ndiv[id^=\"qc_M_\"]",".sticky_bottom,\n.t_logo","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]",".adv_phim,\n.fixed_bottom",".banner-sticky-footer-wrapper",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","[src^=\"https://ads.starzd.com/\"]",".ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)",".expand-static-banner,\n.preload-banner,\n.static-banner",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed,\na.btn_fb:nth-of-type(2)","#hots-btn,\n.bn-popup-bottom-sdwdwxw,\n[href=\"/top-nha-cai.html\"],\ndiv.row-nhacai,\nli.for-desktop-2 > [href^=\"https://debet.fun/\"],\nli.for-desktop-2 > [href^=\"https://net88.run/\"]",".show.modal",".v4j-header > a[target=\"_blank\"]",".quangcaomobile","#tut4ktream_idAdLink",".banner-catfish-bottom","#divExoLayerWrapper",".popup-overlay",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner","#header-ads,\n#header-ads + center",".v4j-header > center",".ads-wrapper",".v4j-header.v4j-content","body > [style*=\"position: fixed;\"]","#AgeModal",".sdzhead","#horizontal-ad",".banner-play",".ads-container",".ads_below_player",".qx_135","div[data-value=\"1\"]","#ads-popup",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky","a#banner","#container-ads","#sticky_ad,\ndiv.text-center:nth-of-type(2)","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile",".text-center.rounded.p-3.border.mb-lg-4.mb-3","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#banner3double","div[id^=\"adsWeb\"]","#pos-25,\n#pos-26","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".bgadmtoptotal","#wrapper > [id^=\"adm-slot\"],\n[class^=\"ads_\"]",".bannertop",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAboveHome,\n.adv-24h-mid,\n.col:has(a[rel=\"nofollow\"]),\n.col:has(a[rel=\"sponsored\"]),\n.fixad300x600,\n.module3,\n[id^=\"ADS_\"]",".admicro",".top-header","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n.ads-masthead",".sys-ads","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter,\n.quang-cao-ben-phai","#vi-smartbanner,\n.LRBanner,\n.running.adsbyvli",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsuggestion",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads-tags,\n.img_side_bar,\n.poka-image",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".box-banner","div[class^=\"adv-\"]",".ads-970x280",".align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.pc-top,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top,\n[id^=\"pos-\"]",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post,\ndiv[style]:has(.adsbypubpower)",".adContainer",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner",".block.translate-x-\\[-50\\%\\].left-2\\/4.z-\\[1\\].bottom-\\[-6px\\].fixed.mx-auto.md\\:container.md\\:px-0.px-4.w-screen",".group-link:has(a[href*=\"&utm_\"]),\n.topnhacai",".jw-button-image",".odds-button,\n.odds-button2",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2",".v4j-watch-1.v4j-content > center","li.special.parent"];

const hostnamesMap = new Map([["*",[0,1,2]],["anime47.app",[3,4]],["doctruyen3qw.pro",4],["www.toptruyenww.pro",4],["bluphim.art",5],["cliphot69.art",[6,7]],["phevkl.blog",[6,21,22,23]],["cliphotvn69.com",6],["xem15.com",[6,156]],["hh3dhay.life",6],["www.gvnvh.net",6],["mobiblog123.net",6],["tram3d.net",6],["xemphim18.net",[6,63,177,280]],["sayhentai.one",6],["phimvuihd.org",6],["viet69.sale",[6,21,22,23,305]],["vutruphim.tv",[6,325]],["topviet69.vip",6],["sextop.asia",[8,9]],["vectorx.top",8],["hls.playerfb.xyz",8],["tuoinung.bid",10],["motchilltvzz.biz",[11,12]],["motphimtv.ch",11],["hhtrungquoc6.com",[11,94]],["hhvsub.com",11],["wibu47.com",11],["yanhh3d.com",[11,25,164,165]],["hhhay.ink",[11,197]],["hentaivn.love",[11,218]],["hhtqvietsub.me",[11,220,221]],["hhtq3d.net",[11,94]],["hoathinh4k3.net",11],["motchillgo.net",11],["hhchina.shop",[11,221,307]],["hoathinh3dtq.site",11],["hoathinhtq.site",11],["dragonphim.tv",11],["hhh3d.tv",11],["hhninja12.tv",11],["hhtutien.tv",11],["phimdacap.tv",[11,320]],["animeweb.vip",[11,94]],["hhtq5.vip",11],["hhtq8.vip",[11,94]],["phimhoathinh3d.vip",11],["hh3d1.xyz",11],["xemphimchill.xyz",[11,25,26,195]],["motphimtvv.com",12],["www.mp.com",[12,110]],["phimnhanhvl.com",12],["movies.vkoolz.com",[12,25]],["subnhanh1.org",[12,64,289]],["phimbet.biz",[13,14]],["motchill.casa",[13,24]],["tructiepdabong5.co",[13,46,55,56,57]],["biphim.id",[13,43,174,175]],["dongphim.id",[13,176,177]],["subnhanh.id",[13,24,175]],["hhpanda.info",[13,175,177,190,191]],["hhanime3d.net",[13,177,190]],["phim.vkool8.net",[13,271,272]],["subnhanhvl.online",[13,24,175,177,190]],["dongchill.pro",[13,177]],["protruyen4.xyz",[13,193]],["phimmoichill.biz",15],["phimmoisz.biz",[16,17]],["tvzinghd.co",[16,58]],["phimmoinay.info",[16,193]],["tamlinh247.biz",18],["khosex.blog",[19,20]],["sexheovl.com",[19,20]],["sexvip.lol",[19,20]],["trangsexdam.net",[19,20,194]],["sexviettop.blog",20],["sexsoc.info",[20,194]],["vlxxai.net",[20,194]],["javhd.social",[20,194]],["javhd.tech",[20,312]],["phimmoichillz.cc",[21,38]],["viet69.town",[23,315]],["247phim.cc",[25,26]],["hayhaytv.cc",[25,26]],["boctem.com",25],["tvhay26.com",25],["web.vuaphimmoi.com",25],["bimmup.tv",[25,317]],["www.ssphim.us",[25,26]],["vungtv.us",[25,327]],["www.phimmoichilla.xyz",[25,26]],["ephoto360.com",[26,85]],["thiepmung.com",26],["cakhiai.cc",[27,28,29,30,31,32,33,34]],["vebozx.cc",[27,28,30,32,33,34,38,39,42]],["xoilacxj.cc",[27,28,31,32,33,34,43,44,45,46,47,48,49]],["90phutz46.live",[27,28,32,33,45,49,211]],["wezzoo.com",[28,38,39,47]],["avvietsub.info",[28,182,183]],["xoilaczz63.live",[28,39,41,45,48,49,215]],["phym18.lol",[28,182,216]],["nhentaivn.online",[28,182,284]],["xemtv.tvhayhd.tv",[28,322]],["phimsexsub.xyz",28],["mitomo.cc",[34,38,39,40,41]],["hayphim.cc",35],["keonhacai55.cc",[36,37]],["xemtivingon.org",37],["tructiep.caheo7.link",[38,208,209,210]],["bongda.rakhooi.tv",[38,208,209,321]],["live3.thapcam26.net",[39,163,184,185,261,262,263,264,265]],["abtruyenmoi.com",[43,61]],["doctruyenln.com",[43,82]],["xemtivi4k.com",[43,158,159]],["xem.tructiepnba.me",[43,225]],["ketqua04.net",[43,245]],["live2.thapcam120.net",[43,163,261]],["live3.thapcam27.net",[43,163,261]],["live3.thapcam29.net",[43,163,185,261,264]],["live4.thapcam29.net",[43,163,185,261]],["vidian.online",[43,287]],["damconuong.top",[43,170]],["bongdainfox.tv",43],["nghean24h.vn",43],["live4.thapcamm.xyz",[43,163,185,261,263,264]],["tuoi69.cfd",50],["heovktgame.club",51],["ketqua247vn.club",52],["phimmoi.club",53],["tvphim.id",[53,87,179]],["motphimww.net",[53,179]],["sexhd88.club",54],["xoivo2.online",[56,57,142]],["123nhadatviet.com",59],["123nhadatviet.net",59],["nld.com.vn",59],["tuoitre.vn",[59,400]],["tuoitrenews.vn",59],["live.7mvn4.com",60],["abysscdn.com",[62,63]],["freeplayervideo.com",[62,63]],["player-cdn.com",[62,63]],["geoip.redirect-ads.com",[62,63]],["animet3.ink",[63,64,196]],["phimss.net",[63,253]],["live4.xoilac34.org",[63,184,185,186,187,188,295]],["fdcdn.xyz",[63,416]],["watch.rkplayer.xyz",[63,418]],["animetvn4.com",[64,65]],["apkmoddone.com",[66,67]],["apkmoddone.phongroblox.com",[67,123,124]],["appvn.com",68],["javtopxx.com",[68,100]],["mod.lnpchannel.com",68],["vivuphim.info",[68,177,195]],["phimmoi.ing",68],["ghienphim.life",[68,113,206,207]],["vlxx.mx",[68,180,233,234,235]],["soikeo365.net",[68,258]],["cungthi.online",[68,89]],["antt.vn",68],["bongda24h.vn",68],["kienthuc.net.vn",[68,380]],["nghenhinvietnam.vn",68],["saostar.vn",68],["v.xemphimviet.xyz",[68,113,207,421]],["asianbookie.com",69],["baomoi.com",70],["baonga.com",71],["bongda12h365.com",72],["canhrau.com",73],["topthuthuat.com",73],["chotlo3s.com",74],["www.clbgamesvn.com",75],["congthucvatly.com",[76,77]],["phuongtrinhhoahoc.com",[77,125]],["contuhoc.com",78],["www5.cbox.ws",78],["cryptoviet.com",79],["diadiem.com",80],["mobi.ditnhauvietnam.com",81],["dualeotruyenbbq.com",83],["ebookbkmt.com",84],["fullcliphot.com",[86,87,88]],["fulllivehot.live",[86,212]],["home1.mannhan10.pro",[86,209,297]],["gamehayvl.com",89],["giavang.net",89],["romgoc.net",89],["gocmod.com",90],["file.gocmod.com",91],["forum.gocmod.com",92],["hayghechill.com",93],["truyensieuhay.com",[94,137]],["hoahoc247.com",95],["hoidap247.com",96],["huphimtv.com",97],["www.iosviet.com",98],["javtiful.com",99],["laptrinhcanban.com",[101,102]],["yhocdata.com",[102,168]],["lichngaytot.com",103],["lichvannien365.com",104],["linkneverdie2.com",105],["linkneverdie.net",105],["linkneverdie.top",105],["loigiaihay.com",106],["metruyencv.com",107],["metruyencv.info",107],["metruyencv.net",107],["mmo4me.com",108],["baodauthau.vn",[108,336]],["motchillio.com",109],["muabanraovat.com",111],["nettruyenww.com",[112,113]],["truyengihotnay.com",[113,134]],["truyengihotnha.com",[113,134]],["truyengihotqua.com",[113,134]],["tenmientruyengi.net",[113,134]],["thichxemphim1.net",[113,266]],["tiemsachhay.net",[113,170,267]],["truyengihotdo.net",[113,134]],["truyengihotnha.net",[113,134]],["truyengihotqua.net",[113,134]],["truyengihotzay.net",[113,134]],["baoxaydung.com.vn",113],["taichinhdoanhnghiep.net.vn",[113,200]],["tienphong.vn",[113,336,393,394]],["toquoc.vn",113],["nettruyenx.com",114],["nhaccuatui.com",115],["phim202.com",116],["phimdinhcao.com",[117,118]],["www.phimdinhcaoz.com",[117,119,120]],["phimlongtieng.com",[117,119,120,121]],["phimdinhcao.net",[117,119]],["phimlongtieng.net",[117,118,119,120,121,233]],["phongroblox.com",122],["www.vip1s.top",[123,314]],["quantrimang.com",[126,127,128]],["hoatieu.vn",[126,148,209,370]],["vndoc.com",[128,148]],["khoahoc.tv",128],["download.com.vn",128],["download.vn",[128,156,361]],["gamevui.vn",128],["sieutamphim.com",129],["thuthuatjb.com",130],["thuthuattienich.com",131],["www.tiengnhatdongian.com",132],["ycongnghe.com",[132,166]],["toithuthuat.com",133],["truyenqqto.com",135],["truyensextv.com",136],["lxmanga.store",[136,309]],["tvhaiss.com",138],["tvhayd.com",139],["tvso1.com",140],["bongdaso66.net",[140,238]],["blog.abit.vn",[140,333]],["vaoroi365.com",[141,142]],["vesotantai.com",143],["vietcetera.com",144],["vietgiaitri.com",145],["vietjack.com",146],["www.vietjack.com",147],["vsc60.com",149],["vtruyen.com",150],["vuighe4.com",[151,152]],["xem1080.com",152],["web1s.com",153],["webhoctienganh.com",154],["webtretho.com",155],["xemphimjav.com",157],["bieudogiavang.vn",158],["xosodaiphat.com",160],["xxoilac.com",[161,162,163]],["goal.90phut24.xyz",[162,163,415]],["hhtm.pro",164],["yeah1.com",167],["animevietsub.cx",[169,170]],["truyen18.fun",171],["cdnwp.icu",172],["mephim.ink",[172,198]],["jav.sexsub.icu",173],["bichill.site",177],["motchilltv.id",178],["phim1080.in",180],["animew.info",181],["socolivebongda.net",[182,257]],["xem.banhkhuc120.info",[184,185,186,187,188]],["xem.vebo31.net",[184,185,186,188]],["vebo4.net",[184,185,186,188]],["doctruyenchu.info",189],["xem.javkche.info",192],["phimtho.net",193],["soikeoz.vip",[193,282]],["javhd.shop",194],["dubaotiente.io",[199,200]],["giadinhonline.vn",[200,358]],["vietnamnet.vn",[200,404]],["maclife.io",201],["tapchibitcoin.io",202],["truyenfull.io",203],["cliphot69.lat",204],["rphang.lat",205],["mn.mediastation.live",213],["sieukhung.live",214],["vn.phym18.lol",217],["www.gaingon18.me",219],["keoso.me",222],["ngaytho.me",223],["phimno1.me",224],["chat.vebotv.me",226],["chichnhau.mobi",[227,228,229,230]],["pheclip.one",[227,229]],["sieudam.vin",[227,228]],["phim18vip.vip",[227,228,229]],["play.anh.moe",231],["viet69.moi",232],["loclipsex.net",234],["tvhayw.org",[234,294]],["phimtuoitho.site",234],["bantincongnghe.net",236],["blogkiienthuc.net",237],["chodansinh.net",239],["domdomcomics.net",240],["fastscans3.net",241],["xem19.gavang1.net",242],["xem20.gavang1.net",242],["gockhuat.net",243],["vn.javbabe.net",244],["khiphach.net",246],["mythethao.net",[247,248]],["vnesports.net",[248,275]],["www.o-study.net",249],["phimgichill.net",250],["phimnhua.net",251],["phimsexgaito.net",252],["sachmoi.net",254],["sexhdpro.net",[255,256]],["jav.vc",255],["vlxyz.tube",256],["tenovi.net",[259,260]],["truyentuan.xyz",[260,419]],["noitu.pro",[265,299]],["tracnghiem.net",268],["phimmoi.tuphim.net",269],["vietmoz.net",270],["vphims.net",272],["www.vlxxhot.net",[273,274]],["vailonxx.vip",[274,329]],["vnexpress.net",276],["vozer.net",277],["vtipster.net",278],["vuonhoalan.net",279],["zcine.net",281],["bongda365.news",282],["www.buomtv.one",283],["phimhaymoi.online",285],["tut4ktream.online",286],["blogtruyenvn.org",288],["hayhaytv.org",289],["lmssplus.org",290],["mphim14.org",291],["phimreview.org",292],["truyenaudiocv.org",293],["chillphimmoi.pro",296],["home2.mannhan9.pro",298],["phimsexhay669.pro",300],["phim.sexdb.pro",301],["sexgaidep69.pro",301],["phim.sexmoi5s.pro",301],["sexvn2024.pro",302],["phim.sexxsub.pro",[303,304]],["vl.phe.to",[304,313]],["phim18hd.sex",306],["hd.javhay.site",308],["sex.tuoi69.store",310],["filemoon.sx",311],["the.tube",316],["hentaihvn.tv",318],["phim88.tv",319],["vieclam.tv",[323,324]],["xskt.com.vn",324],["phimhdc.us",[326,327]],["tram3d.vip",328],["10gb.vn",330],["2banh.vn",331],["2game.vn",332],["afamily.vn",334],["sport5.vn",334],["autodaily.vn",335],["xehay.vn",[335,411]],["www.baogiaothong.vn",337],["phapluatplus.baophapluat.vn",338],["videophapluat.baophapluat.vn",339],["cafebiz.vn",340],["cafef.vn",[341,342]],["ttvn.toquoc.vn",342],["chap.vn",343],["24h.com.vn",344],["autopro.com.vn",345],["baohaugiang.com.vn",346],["congan.com.vn",347],["daklak24h.com.vn",348],["dantri.com.vn",349],["doisongphapluat.com.vn",350],["vtcnews.vn",350],["tapchikientruc.com.vn",351],["thanhtra.com.vn",352],["thoidai.com.vn",353],["petrotimes.vn",353],["www.thuocbietduoc.com.vn",354],["thuongtruong.com.vn",355],["thuysanvietnam.com.vn",356],["voh.com.vn",357],["congluan.vn",358],["congly.vn",359],["thitruongtaichinhtiente.vn",[359,392]],["danviet.vn",360],["eva.vn",362],["fshare.vn",363],["game24h.vn",364],["game8.vn",365],["gameio.vn",366],["gamek.vn",367],["soha.vn",367],["genk.vn",368],["vnews.gov.vn",369],["hosocongty.vn",371],["kenh14.vn",372],["kinhtedothi.vn",[373,374]],["minhngoc.net.vn",374],["vn-z.vn",374],["lazi.vn",375],["luatduonggia.vn",376],["lucloi.vn",377],["muare.vn",378],["myeva.vn",379],["phunumoi.net.vn",381],["nhipcaudautu.vn",381],["nhacdj.vn",382],["qdnd.vn",383],["reatimes.vn",384],["rung.vn",385],["www.saostar.vn",386],["sharecode.vn",387],["techrum.vn",388],["thanhnien.vn",389],["thethao247.vn",390],["thethaovanhoa.vn",391],["tinnhanhchungkhoan.vn",394],["tiin.vn",395],["timdaily.vn",396],["tinhte.vn",397],["tinmoi.vn",398],["tintucvietnam.vn",399],["tuyengiao.vn",401],["v4u.vn",402],["vietfones.vn",403],["vietq.vn",405],["viettelstore.vn",406],["voz.vn",407],["vtvgo.vn",408],["vungoctuan.vn",409],["webthethao.vn",410],["yellowpages.vn",412],["znews.vn",413],["www.vipphim.wiki",414],["plcdn.xyz",417],["vietxxx.xyz",420]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["cafef.vn",[0]],["livescore.com",[1]],["msn.com",[1]],["dm.de",[1]],["medium.com",[1]],["vnexpress.net",[2]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
