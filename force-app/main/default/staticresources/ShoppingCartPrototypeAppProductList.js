<div>
    <div class="search-wrapper">
        <div class="search-container">
            <div class="wrapper-icon-left">
                <span class="slds-icon_container slds-icon-utility-search" title="Description of icon when needed">
                    <svg class="slds-icon slds-current-color" aria-hidden="true">
                        <use xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                    <span class="slds-assistive-text">Description of icon when needed</span>
                </span>
            </div>
            <div>
                <input type="text" ng-model="termSearch" id="txtTermSearch" placeholder="Buscar produtos..." />
            </div>
            <div class="wrapper-icon-right" ng-click="clearSearch()">
                <span class="slds-icon_container slds-icon-utility-close" title="Description of icon when needed">
                    <svg class="slds-icon slds-current-color" aria-hidden="true">
                        <use xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                    </svg>
                    <span class="slds-assistive-text">Description of icon when needed</span>
                </span>
            </div>
        </div>
    </div>

    <div class="wrapper-products-divide" ng-if="!termSearch">
        <!-- <div class="slds-grid" ng-if="recentallProducts.length > 0"> -->
        <div class="slds-grid">
            <div class="slds-col slds-size_12-of-12">
                <div class="slds-section slds-is-open">
                    <h3 class="slds-section__title slds-theme_shade">
                        <span class="slds-truncate slds-p-horizontal_small" title="Section Title">Recentes</span>
                    </h3>
                    <div aria-hidden="false" class="slds-section__content">
                        <div class="slds-grid slds-wrap">
                            <div class="slds-col slds-size_1-of-1 slds-large-size_1-of-3 slds-medium-size_1-of-2" ng-repeat="product in allProducts | filter: {recent: true} | orderBy:'name'">
                                <fieldset class="slds-form-element">
                                    <div class="slds-form-element__control">
                                        <div class="slds-visual-picker slds-visual-picker_vertical">
                                            <input type="checkbox" id="{{product.id}}"
                                                value="visual-picker-{{product.id}}" name="productsInput"
                                                ng-model="product.inCart" ng-checked="product.inCart" />
                                            <label for="{{product.id}}">
                                                <span class="slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-left">
                                                    <span>
                                                        <span class="slds-text-heading_medium slds-m-bottom_x-small">{{product.name}}</span>
                                                        <span class="slds-text-title slds-m-bottom_x-small">{{product.sku}}</span>
                                                        <div class="slds-text-title" ng-if="product.recent">
                                                            <span class="slds-text-title"
                                                                ng-if="!product.detail.show">R$
                                                                {{formatPrice(product.detail.lastSalesPrice)}}</span>
                                                        </div>
                                                        <div class="slds-text-title" ng-if="!product.recent">
                                                            <span class="slds-text-title">R$
                                                                {{formatPrice(product.priceList)}}</span>
                                                        </div>
                                                        <div class="collapse">
                                                            <input type="checkbox" id="collapse-{{product.id}}" name="collapse" ng-model="product.detail.show" ng-checked="product.detail.show" />
                                                            <label for="collapse-{{product.id}}">
                                                                <div class="collapse-body">
                                                                    <div class="slds-grid">
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Último Preço</label>
                                                                                <p>R$
                                                                                    {{formatPrice(product.detail.lastSalesPrice)}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element right">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Quantidade</label>
                                                                                <p>{{product.detail.lastSalesQuantity}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="slds-grid">
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Última
                                                                                    Venda</label>
                                                                                <p>{{formatScopeDate(product.detail.lastSalesDate)}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element right">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Desconto</label>
                                                                                <p>{{formatPrice(product.detail.lastSalesDiscount)}}%
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="slds-grid">
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Preço por
                                                                                    Litro</label>
                                                                                <p>R$
                                                                                    {{formatPrice(product.detail.lastSalesPricePerLitre)}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element right">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Vencimento</label>
                                                                                <p>{{product.detail.lastSalesPaymentCondition}}
                                                                                    dias</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="collapse-header">
                                                                    <span class="center">
                                                                        <svg class="slds-icon" aria-hidden="true">
                                                                            <use ng-show="!product.detail.show"
                                                                                xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#chevrondown">
                                                                            </use>
                                                                            <use ng-show="product.detail.show"
                                                                                xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#chevronup">
                                                                            </use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </span>
                                                </span>
                                                <span class="slds-icon_container slds-visual-picker__text-check">
                                                    <svg class="slds-icon slds-icon-text-check slds-icon_x-small"
                                                        aria-hidden="true">
                                                        <use
                                                            xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#check">
                                                        </use>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ng-if="(allProducts | filter: {recent: true}).length == 0">
            <div class="slds-illustration slds-illustration_small">
                <svg class="slds-illustration__svg" viewBox="0 0 454 182" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-73.000000, -110.000000)">
                            <g>
                                <g transform="translate(75.000000, 240.000000)">
                                    <polyline vector-effect="non-scaling-stroke"
                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        transform="translate(375.250000, 18.000000) scale(-1, 1) translate(-375.250000, -18.000000) "
                                        points="335.5 36 380 0 415 27"></polyline>
                                    <polyline vector-effect="non-scaling-stroke"
                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        transform="translate(324.500000, 22.500000) scale(-1, 1) translate(-324.500000, -22.500000) "
                                        points="303 18 313.5 9 346 36"></polyline>
                                    <path vector-effect="non-scaling-stroke" d="M0,36.5 L450,36.5"
                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                        stroke-linecap="round"></path>
                                    <path vector-effect="non-scaling-stroke"
                                        d="M406.04276,9.26543454 L413,32.7461193 L400.495829,23.8448556 L404.113561,9.30802252 C404.246938,8.772085 404.789525,8.44574518 405.325462,8.57912213 C405.669253,8.66468028 405.942114,8.9257539 406.04276,9.26543454 Z"
                                        class="slds-illustration__fill-secondary"></path>
                                    <path vector-effect="non-scaling-stroke"
                                        d="M311.962964,11.4391572 L318,33 L306.770218,23.1063642 L310.037036,11.4391572 C310.185948,10.9073269 310.7378,10.5969106 311.26963,10.7458231 C311.605963,10.8399963 311.868791,11.1028246 311.962964,11.4391572 Z"
                                        class="slds-illustration__fill-secondary"
                                        transform="translate(312.385109, 21.626882) scale(-1, 1) translate(-312.385109, -21.626882) ">
                                    </path>
                                </g>
                                <g transform="translate(83.000000, 173.000000)"
                                    class="slds-illustration__stroke-secondary" stroke-linecap="round" stroke-width="3">
                                    <path vector-effect="non-scaling-stroke"
                                        d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13">
                                    </path>
                                    <path vector-effect="non-scaling-stroke"
                                        d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5">
                                    </path>
                                    <path vector-effect="non-scaling-stroke" d="M18,27.5 L83.0004985,27.5"></path>
                                    <path vector-effect="non-scaling-stroke" d="M0,27.5 L8,27.5"></path>
                                </g>
                                <g transform="translate(274.000000, 111.000000)"
                                    class="slds-illustration__stroke-secondary" stroke-linecap="round" stroke-width="3">
                                    <path vector-effect="non-scaling-stroke"
                                        d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13">
                                    </path>
                                    <path vector-effect="non-scaling-stroke"
                                        d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5">
                                    </path>
                                    <path vector-effect="non-scaling-stroke" d="M18,27.5 L83.0004985,27.5"></path>
                                    <path vector-effect="non-scaling-stroke" d="M0,27.5 L8,27.5"></path>
                                </g>
                                <g transform="translate(115.000000, 191.000000)">
                                    <g transform="translate(148.000000, 32.000000) scale(-1, 1) translate(-148.000000, -32.000000) translate(116.000000, 0.000000)"
                                        class="slds-illustration__fill-secondary">
                                        <path vector-effect="non-scaling-stroke"
                                            d="M25,53 C25,55.76 22.76125,58 20,58 C17.24,58 15,55.76 15,53 C15,50.24 17.24,48 20,48 C22.76125,48 25,50.24 25,53 Z">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M8,58 C6.34130214,58 5,59.344354 5,61 C5,62.655646 6.34130214,64 8,64 C9.65717192,64 11,62.655646 11,61 C11,59.344354 9.65717192,58 8,58">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M43.2932416,0 C35.2856577,0 28.3128049,4.40586521 24.6382957,10.9184604 C22.0889739,9.11222859 18.9814709,8.03886643 15.6213524,8.03886643 C6.99160591,8.03886643 0,15.0367986 0,23.6690948 C0,32.302472 6.99160591,39.3004042 15.6213524,39.3004042 C15.8077805,39.3004042 15.9920023,39.2777047 16.1806367,39.2712191 C19.0013272,43.3344299 23.6918145,46 29.011083,46 C32.7848734,46 36.2475826,44.6596485 38.9469293,42.4296926 C40.3512074,42.7193815 41.8051261,42.8739543 43.2932416,42.8739543 C55.1275661,42.8739543 64,33.4569038 64,21.6185732 C64,9.77916158 55.1275661,0 43.2932416,0 Z">
                                        </path>
                                    </g>
                                    <g transform="translate(0.000000, 18.000000)">
                                        <path vector-effect="non-scaling-stroke"
                                            d="M90.5057553,53.0538038 C90.5057553,53.0538038 116.215483,58.0701972 145.433002,58.0701972 C174.650521,58.0701972 204.505755,53.0538038 204.505755,53.0538038 C204.505755,53.0538038 192.222862,60.6378663 185.905056,63.0258453 C179.58725,65.4138243 166.637272,67.3671811 166.637272,67.3671811 C166.637272,67.3671811 153.865271,70.7987363 147.505755,70.9374424 C141.14624,71.0761485 132.54218,68.1108222 132.54218,68.1108222 L106.786672,63.0258453 L90.5057553,53.0538038 Z"
                                            class="slds-illustration__fill-primary"></path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M84.8198266,43.3368404 C84.8198266,43.3368404 99.4457512,70.425365 147.915957,70.425365 C196.386164,70.425365 214.819827,43.3368404 214.819827,43.3368404"
                                            class="slds-illustration__stroke-primary" stroke-width="4"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path vector-effect="non-scaling-stroke" d="M73,49.5 L88,49.5"
                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                            stroke-linecap="round"></path>
                                        <path vector-effect="non-scaling-stroke" d="M211,49.5 L226,49.5"
                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                            stroke-linecap="round"></path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M142.74548,0 L153.650377,2.22044605e-16 C154.478804,8.05656105e-16 155.150377,0.671572875 155.150377,1.5 L155.150377,2.98261094 C155.150377,3.11136765 155.100706,3.2351613 155.01171,3.32820944 L146.234757,12.5047677 L155.209827,12.5047677 C156.038254,12.5047677 156.709827,13.1763405 156.709827,14.0047677 L156.709827,14.4270108 C156.709827,15.2554379 156.038254,15.9270108 155.209827,15.9270108 L141.888626,15.9270108 C141.060199,15.9270108 140.388626,15.2554379 140.388626,14.4270108 L140.388626,12.8248256 C140.388626,12.696109 140.438265,12.5723507 140.527212,12.4793109 L149.20663,3.40051458 L142.74548,3.40051458 C141.917053,3.40051458 141.24548,2.7289417 141.24548,1.90051458 L141.24548,1.5 C141.24548,0.671572875 141.917053,1.52179594e-16 142.74548,0 Z"
                                            class="slds-illustration__fill-primary"></path>
                                        <path vector-effect="non-scaling-stroke" d="M20,81.5 L390,81.5"
                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                            stroke-linecap="round"></path>
                                        <path vector-effect="non-scaling-stroke" d="M0,81.5 L12,81.5"
                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                            stroke-linecap="round"></path>
                                    </g>
                                </g>
                                <g transform="translate(175.500000, 153.000000)">
                                    <g transform="translate(0.000000, 7.000000)"
                                        class="slds-illustration__fill-secondary">
                                        <path vector-effect="non-scaling-stroke"
                                            d="M19.3444016,2.17529966 L32.8957957,84.445825 C33.0753185,85.5357082 32.3373256,86.5647651 31.2474424,86.7442879 C31.1399954,86.7619863 31.0312825,86.7708798 30.9223876,86.7708798 L2.12566435,86.7708798 C1.02109485,86.7708798 0.125664347,85.8754493 0.125664347,84.7708798 C0.125664347,84.6486417 0.136870913,84.526661 0.159143349,84.4064691 L15.4044726,2.13594377 C15.6057311,1.04986421 16.6493247,0.332574998 17.7354043,0.533833473 C18.5639901,0.687376483 19.2074411,1.34381197 19.3444016,2.17529966 Z">
                                        </path>
                                    </g>
                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                        stroke-width="3">
                                        <polygon vector-effect="non-scaling-stroke" stroke-linejoin="round"
                                            points="17 0.709590879 34 94.5 -1.82254212e-12 94.5">
                                        </polygon>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M17,8.09449405 C17,92.0999502 17,135.036706 17,136.904762 C17,135.036706 17,92.0999502 17,8.09449405 Z">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M17,64.2334004 C24.3333333,71.7198767 28,75.6881307 28,76.1381623 C28,75.6881307 24.3333333,71.7198767 17,64.2334004 Z"
                                            stroke-linejoin="round"
                                            transform="translate(22.500000, 70.185781) scale(-1, 1) translate(-22.500000, -70.185781) ">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M8,50.2334004 C14,57.05321 17,60.6881307 17,61.1381623 C17,60.6881307 14,57.05321 8,50.2334004 Z"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </g>
                                <g transform="translate(307.500000, 135.000000)">
                                    <g transform="translate(0.000000, 2.000000)"
                                        class="slds-illustration__fill-secondary">
                                        <path vector-effect="non-scaling-stroke"
                                            d="M29.524032,0.669921875 L55.6419593,108.305728 C55.9024257,109.379148 55.2433964,110.460477 54.1699762,110.720943 C54.0155692,110.75841 53.8572476,110.777344 53.69836,110.777344 L2.40272523,110.777344 C1.29815573,110.777344 0.402725233,109.881913 0.402725233,108.777344 C0.402725233,108.601258 0.42597945,108.425943 0.471884777,108.255946 L29.524032,0.669921875 Z">
                                        </path>
                                    </g>
                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                        stroke-width="3">
                                        <polygon vector-effect="non-scaling-stroke" stroke-linejoin="round"
                                            points="29 0 56.572466 112.5 0 112.5"></polygon>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M29,6.09449405 C29,103.433283 29,153.036706 29,154.904762 C29,153.036706 29,103.433283 29,6.09449405 Z">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M29,74.2334004 C41,87.05321 47,93.6881307 47,94.1381623 C47,93.6881307 41,87.05321 29,74.2334004 Z"
                                            stroke-linejoin="round"
                                            transform="translate(38.000000, 84.185781) scale(-1, 1) translate(-38.000000, -84.185781) ">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M14,61.2334004 C24,72.7198767 29,78.6881307 29,79.1381623 C29,78.6881307 24,72.7198767 14,61.2334004 Z"
                                            stroke-linejoin="round"></path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M29,48.2334004 C36.3333333,57.05321 40,61.6881307 40,62.1381623 C40,61.6881307 36.3333333,57.05321 29,48.2334004 Z"
                                            stroke-linejoin="round"
                                            transform="translate(34.500000, 55.185781) scale(-1, 1) translate(-34.500000, -55.185781) ">
                                        </path>
                                    </g>
                                </g>
                                <g transform="translate(347.500000, 166.000000)">
                                    <g transform="translate(0.000000, 4.000000)"
                                        class="slds-illustration__fill-secondary">
                                        <path vector-effect="non-scaling-stroke"
                                            d="M19.3444016,2.17529966 L32.8957957,84.445825 C33.0753185,85.5357082 32.3373256,86.5647651 31.2474424,86.7442879 C31.1399954,86.7619863 31.0312825,86.7708798 30.9223876,86.7708798 L2.12566435,86.7708798 C1.02109485,86.7708798 0.125664347,85.8754493 0.125664347,84.7708798 C0.125664347,84.6486417 0.136870913,84.526661 0.159143349,84.4064691 L15.4044726,2.13594377 C15.6057311,1.04986421 16.6493247,0.332574998 17.7354043,0.533833473 C18.5639901,0.687376483 19.2074411,1.34381197 19.3444016,2.17529966 Z">
                                        </path>
                                    </g>
                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                        stroke-width="3">
                                        <polygon vector-effect="non-scaling-stroke" stroke-linejoin="round"
                                            points="17 0.709590879 34 91.5 -1.82254212e-12 91.5">
                                        </polygon>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M17,5.09449405 C17,83.0999502 17,123.036706 17,124.904762 C17,123.036706 17,83.0999502 17,5.09449405 Z">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M17,61.2334004 C24.3333333,68.7198767 28,72.6881307 28,73.1381623 C28,72.6881307 24.3333333,68.7198767 17,61.2334004 Z"
                                            stroke-linejoin="round"
                                            transform="translate(22.500000, 67.185781) scale(-1, 1) translate(-22.500000, -67.185781) ">
                                        </path>
                                    </g>
                                </g>
                                <g transform="translate(392.000000, 184.000000)"
                                    class="slds-illustration__stroke-secondary" stroke-linecap="round" stroke-width="3">
                                    <g
                                        transform="translate(31.713442, 25.088326) rotate(-15.000000) translate(-31.713442, -25.088326) translate(4.713442, 6.588326)">
                                        <path vector-effect="non-scaling-stroke"
                                            d="M31.0360707,3.43528591 C31.0360707,3.43528591 40.5802283,0.671893051 42.6488424,10.6908663"
                                            transform="translate(36.842457, 6.888440) rotate(41.000000) translate(-36.842457, -6.888440) ">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M40.4282002,10.1797377 C40.4282002,10.1797377 49.9723578,7.4163448 52.0409719,17.435318"
                                            transform="translate(46.234586, 13.632892) scale(-1, 1) rotate(-41.000000) translate(-46.234586, -13.632892) ">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M0.730284783,29.5865514 C0.730284783,29.5865514 10.2744424,26.8231586 12.3430565,36.8421318">
                                        </path>
                                        <path vector-effect="non-scaling-stroke"
                                            d="M12.7302848,29.5865514 C12.7302848,29.5865514 22.2744424,26.8231586 24.3430565,36.8421318"
                                            transform="translate(18.536671, 33.039705) scale(-1, 1) translate(-18.536671, -33.039705) ">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="slds-text-longform">
                    <h3 class="slds-text-heading_medium">Nenhum produto recente</h3>
                </div>
            </div>
        </div>
        <div class="slds-grid">
            <div class="slds-col slds-size_12-of-12">
                <div class="slds-section slds-is-open">
                    <h3 class="slds-section__title slds-theme_shade">
                        <span class="slds-truncate slds-p-horizontal_small" title="Section Title">Produtos</span>
                    </h3>
                    <div aria-hidden="false" class="slds-section__content">
                        <div class="slds-grid slds-wrap">
                            <div class="slds-col slds-size_1-of-1 slds-large-size_1-of-3 slds-medium-size_1-of-2"
                                ng-repeat="product in allProducts | filter: {recent: false} | orderBy:'name'">
                                <fieldset class="slds-form-element">
                                    <div class="slds-form-element__control">
                                        <div class="slds-visual-picker slds-visual-picker_vertical">
                                            <input type="checkbox" id="{{product.id}}" value="visual-picker-{{product.id}}" name="productsInput" ng-model="product.inCart" ng-checked="product.inCart" />
                                            <label for="{{product.id}}">
                                                <span class="slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-left">
                                                    <span>
                                                        <span class="slds-text-heading_medium slds-m-bottom_x-small">{{product.name}}</span>
                                                        <span class="slds-text-title slds-m-bottom_x-small">{{product.sku}}</span>
                                                        <span class="slds-text-title">R$ {{formatPrice(product.priceList)}}</span>
                                                    </span>
                                                </span>
                                                <span class="slds-icon_container slds-visual-picker__text-check">
                                                    <svg class="slds-icon slds-icon-text-check slds-icon_x-small" aria-hidden="true">
                                                        <use xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div ng-if="(allProducts | filter: {recent: true}).length == 0">
                            <div class="slds-illustration slds-illustration_small">
                                <svg class="slds-illustration__svg" viewBox="0 0 454 182" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-73.000000, -110.000000)">
                                            <g>
                                                <g transform="translate(75.000000, 240.000000)">
                                                    <polyline vector-effect="non-scaling-stroke"
                                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        transform="translate(375.250000, 18.000000) scale(-1, 1) translate(-375.250000, -18.000000) "
                                                        points="335.5 36 380 0 415 27"></polyline>
                                                    <polyline vector-effect="non-scaling-stroke"
                                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        transform="translate(324.500000, 22.500000) scale(-1, 1) translate(-324.500000, -22.500000) "
                                                        points="303 18 313.5 9 346 36"></polyline>
                                                    <path vector-effect="non-scaling-stroke" d="M0,36.5 L450,36.5"
                                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                                        stroke-linecap="round"></path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M406.04276,9.26543454 L413,32.7461193 L400.495829,23.8448556 L404.113561,9.30802252 C404.246938,8.772085 404.789525,8.44574518 405.325462,8.57912213 C405.669253,8.66468028 405.942114,8.9257539 406.04276,9.26543454 Z"
                                                        class="slds-illustration__fill-secondary"></path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M311.962964,11.4391572 L318,33 L306.770218,23.1063642 L310.037036,11.4391572 C310.185948,10.9073269 310.7378,10.5969106 311.26963,10.7458231 C311.605963,10.8399963 311.868791,11.1028246 311.962964,11.4391572 Z"
                                                        class="slds-illustration__fill-secondary"
                                                        transform="translate(312.385109, 21.626882) scale(-1, 1) translate(-312.385109, -21.626882) ">
                                                    </path>
                                                </g>
                                                <g transform="translate(83.000000, 173.000000)"
                                                    class="slds-illustration__stroke-secondary" stroke-linecap="round"
                                                    stroke-width="3">
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M18,27.5 L83.0004985,27.5"></path>
                                                    <path vector-effect="non-scaling-stroke" d="M0,27.5 L8,27.5"></path>
                                                </g>
                                                <g transform="translate(274.000000, 111.000000)"
                                                    class="slds-illustration__stroke-secondary" stroke-linecap="round"
                                                    stroke-width="3">
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M18,27.5 L83.0004985,27.5"></path>
                                                    <path vector-effect="non-scaling-stroke" d="M0,27.5 L8,27.5"></path>
                                                </g>
                                                <g transform="translate(115.000000, 191.000000)">
                                                    <g transform="translate(148.000000, 32.000000) scale(-1, 1) translate(-148.000000, -32.000000) translate(116.000000, 0.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M25,53 C25,55.76 22.76125,58 20,58 C17.24,58 15,55.76 15,53 C15,50.24 17.24,48 20,48 C22.76125,48 25,50.24 25,53 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M8,58 C6.34130214,58 5,59.344354 5,61 C5,62.655646 6.34130214,64 8,64 C9.65717192,64 11,62.655646 11,61 C11,59.344354 9.65717192,58 8,58">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M43.2932416,0 C35.2856577,0 28.3128049,4.40586521 24.6382957,10.9184604 C22.0889739,9.11222859 18.9814709,8.03886643 15.6213524,8.03886643 C6.99160591,8.03886643 0,15.0367986 0,23.6690948 C0,32.302472 6.99160591,39.3004042 15.6213524,39.3004042 C15.8077805,39.3004042 15.9920023,39.2777047 16.1806367,39.2712191 C19.0013272,43.3344299 23.6918145,46 29.011083,46 C32.7848734,46 36.2475826,44.6596485 38.9469293,42.4296926 C40.3512074,42.7193815 41.8051261,42.8739543 43.2932416,42.8739543 C55.1275661,42.8739543 64,33.4569038 64,21.6185732 C64,9.77916158 55.1275661,0 43.2932416,0 Z">
                                                        </path>
                                                    </g>
                                                    <g transform="translate(0.000000, 18.000000)">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M90.5057553,53.0538038 C90.5057553,53.0538038 116.215483,58.0701972 145.433002,58.0701972 C174.650521,58.0701972 204.505755,53.0538038 204.505755,53.0538038 C204.505755,53.0538038 192.222862,60.6378663 185.905056,63.0258453 C179.58725,65.4138243 166.637272,67.3671811 166.637272,67.3671811 C166.637272,67.3671811 153.865271,70.7987363 147.505755,70.9374424 C141.14624,71.0761485 132.54218,68.1108222 132.54218,68.1108222 L106.786672,63.0258453 L90.5057553,53.0538038 Z"
                                                            class="slds-illustration__fill-primary"></path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M84.8198266,43.3368404 C84.8198266,43.3368404 99.4457512,70.425365 147.915957,70.425365 C196.386164,70.425365 214.819827,43.3368404 214.819827,43.3368404"
                                                            class="slds-illustration__stroke-primary" stroke-width="4"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M73,49.5 L88,49.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M211,49.5 L226,49.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M142.74548,0 L153.650377,2.22044605e-16 C154.478804,8.05656105e-16 155.150377,0.671572875 155.150377,1.5 L155.150377,2.98261094 C155.150377,3.11136765 155.100706,3.2351613 155.01171,3.32820944 L146.234757,12.5047677 L155.209827,12.5047677 C156.038254,12.5047677 156.709827,13.1763405 156.709827,14.0047677 L156.709827,14.4270108 C156.709827,15.2554379 156.038254,15.9270108 155.209827,15.9270108 L141.888626,15.9270108 C141.060199,15.9270108 140.388626,15.2554379 140.388626,14.4270108 L140.388626,12.8248256 C140.388626,12.696109 140.438265,12.5723507 140.527212,12.4793109 L149.20663,3.40051458 L142.74548,3.40051458 C141.917053,3.40051458 141.24548,2.7289417 141.24548,1.90051458 L141.24548,1.5 C141.24548,0.671572875 141.917053,1.52179594e-16 142.74548,0 Z"
                                                            class="slds-illustration__fill-primary"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M20,81.5 L390,81.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M0,81.5 L12,81.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                    </g>
                                                </g>
                                                <g transform="translate(175.500000, 153.000000)">
                                                    <g transform="translate(0.000000, 7.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M19.3444016,2.17529966 L32.8957957,84.445825 C33.0753185,85.5357082 32.3373256,86.5647651 31.2474424,86.7442879 C31.1399954,86.7619863 31.0312825,86.7708798 30.9223876,86.7708798 L2.12566435,86.7708798 C1.02109485,86.7708798 0.125664347,85.8754493 0.125664347,84.7708798 C0.125664347,84.6486417 0.136870913,84.526661 0.159143349,84.4064691 L15.4044726,2.13594377 C15.6057311,1.04986421 16.6493247,0.332574998 17.7354043,0.533833473 C18.5639901,0.687376483 19.2074411,1.34381197 19.3444016,2.17529966 Z">
                                                        </path>
                                                    </g>
                                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                                        stroke-width="3">
                                                        <polygon vector-effect="non-scaling-stroke"
                                                            stroke-linejoin="round"
                                                            points="17 0.709590879 34 94.5 -1.82254212e-12 94.5">
                                                        </polygon>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,8.09449405 C17,92.0999502 17,135.036706 17,136.904762 C17,135.036706 17,92.0999502 17,8.09449405 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,64.2334004 C24.3333333,71.7198767 28,75.6881307 28,76.1381623 C28,75.6881307 24.3333333,71.7198767 17,64.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(22.500000, 70.185781) scale(-1, 1) translate(-22.500000, -70.185781) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M8,50.2334004 C14,57.05321 17,60.6881307 17,61.1381623 C17,60.6881307 14,57.05321 8,50.2334004 Z"
                                                            stroke-linejoin="round"></path>
                                                    </g>
                                                </g>
                                                <g transform="translate(307.500000, 135.000000)">
                                                    <g transform="translate(0.000000, 2.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29.524032,0.669921875 L55.6419593,108.305728 C55.9024257,109.379148 55.2433964,110.460477 54.1699762,110.720943 C54.0155692,110.75841 53.8572476,110.777344 53.69836,110.777344 L2.40272523,110.777344 C1.29815573,110.777344 0.402725233,109.881913 0.402725233,108.777344 C0.402725233,108.601258 0.42597945,108.425943 0.471884777,108.255946 L29.524032,0.669921875 Z">
                                                        </path>
                                                    </g>
                                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                                        stroke-width="3">
                                                        <polygon vector-effect="non-scaling-stroke"
                                                            stroke-linejoin="round"
                                                            points="29 0 56.572466 112.5 0 112.5"></polygon>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29,6.09449405 C29,103.433283 29,153.036706 29,154.904762 C29,153.036706 29,103.433283 29,6.09449405 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29,74.2334004 C41,87.05321 47,93.6881307 47,94.1381623 C47,93.6881307 41,87.05321 29,74.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(38.000000, 84.185781) scale(-1, 1) translate(-38.000000, -84.185781) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M14,61.2334004 C24,72.7198767 29,78.6881307 29,79.1381623 C29,78.6881307 24,72.7198767 14,61.2334004 Z"
                                                            stroke-linejoin="round"></path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29,48.2334004 C36.3333333,57.05321 40,61.6881307 40,62.1381623 C40,61.6881307 36.3333333,57.05321 29,48.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(34.500000, 55.185781) scale(-1, 1) translate(-34.500000, -55.185781) ">
                                                        </path>
                                                    </g>
                                                </g>
                                                <g transform="translate(347.500000, 166.000000)">
                                                    <g transform="translate(0.000000, 4.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M19.3444016,2.17529966 L32.8957957,84.445825 C33.0753185,85.5357082 32.3373256,86.5647651 31.2474424,86.7442879 C31.1399954,86.7619863 31.0312825,86.7708798 30.9223876,86.7708798 L2.12566435,86.7708798 C1.02109485,86.7708798 0.125664347,85.8754493 0.125664347,84.7708798 C0.125664347,84.6486417 0.136870913,84.526661 0.159143349,84.4064691 L15.4044726,2.13594377 C15.6057311,1.04986421 16.6493247,0.332574998 17.7354043,0.533833473 C18.5639901,0.687376483 19.2074411,1.34381197 19.3444016,2.17529966 Z">
                                                        </path>
                                                    </g>
                                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                                        stroke-width="3">
                                                        <polygon vector-effect="non-scaling-stroke"
                                                            stroke-linejoin="round"
                                                            points="17 0.709590879 34 91.5 -1.82254212e-12 91.5">
                                                        </polygon>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,5.09449405 C17,83.0999502 17,123.036706 17,124.904762 C17,123.036706 17,83.0999502 17,5.09449405 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,61.2334004 C24.3333333,68.7198767 28,72.6881307 28,73.1381623 C28,72.6881307 24.3333333,68.7198767 17,61.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(22.500000, 67.185781) scale(-1, 1) translate(-22.500000, -67.185781) ">
                                                        </path>
                                                    </g>
                                                </g>
                                                <g transform="translate(392.000000, 184.000000)"
                                                    class="slds-illustration__stroke-secondary" stroke-linecap="round"
                                                    stroke-width="3">
                                                    <g
                                                        transform="translate(31.713442, 25.088326) rotate(-15.000000) translate(-31.713442, -25.088326) translate(4.713442, 6.588326)">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M31.0360707,3.43528591 C31.0360707,3.43528591 40.5802283,0.671893051 42.6488424,10.6908663"
                                                            transform="translate(36.842457, 6.888440) rotate(41.000000) translate(-36.842457, -6.888440) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M40.4282002,10.1797377 C40.4282002,10.1797377 49.9723578,7.4163448 52.0409719,17.435318"
                                                            transform="translate(46.234586, 13.632892) scale(-1, 1) rotate(-41.000000) translate(-46.234586, -13.632892) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M0.730284783,29.5865514 C0.730284783,29.5865514 10.2744424,26.8231586 12.3430565,36.8421318">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M12.7302848,29.5865514 C12.7302848,29.5865514 22.2744424,26.8231586 24.3430565,36.8421318"
                                                            transform="translate(18.536671, 33.039705) scale(-1, 1) translate(-18.536671, -33.039705) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div class="slds-text-longform">
                                    <h3 class="slds-text-heading_medium">Nenhum produto encontrado</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper-products" ng-if="termSearch">
        <div class="slds-grid">
            <div class="slds-col slds-size_12-of-12">
                <div class="slds-section slds-is-open">
                    <h3 class="slds-section__title slds-theme_shade">
                        <span class="slds-truncate slds-p-horizontal_small" title="Section Title">Produtos</span>
                    </h3>
                    <div aria-hidden="false" class="slds-section__content">
                        <div class="slds-grid slds-wrap">
                            <div class="slds-col slds-size_1-of-1 slds-large-size_1-of-3 slds-medium-size_1-of-2"
                                ng-repeat="product in allProducts | filter:termSearch | orderBy:'name'">
                                <fieldset class="slds-form-element">
                                    <div class="slds-form-element__control">
                                        <div class="slds-visual-picker slds-visual-picker_vertical">
                                            <input type="checkbox" id="{{product.id}}" value="visual-picker-{{product.id}}" name="productsInput" ng-model="product.inCart" ng-checked="product.inCart" />
                                            <label for="{{product.id}}">
                                                <span class="slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-left">
                                                    <span>
                                                        <span class="slds-text-heading_medium slds-m-bottom_x-small">{{product.name}}</span>
                                                        <span class="slds-text-title slds-m-bottom_x-small">{{product.sku}}</span>                                                        
                                                        <div class="slds-text-title" ng-if="product.recent">
                                                            <span class="slds-text-title" ng-if="!product.detail.show">R$ {{formatPrice(product.detail.lastSalesPrice)}}</span>                                                            
                                                        </div>
                                                        <div class="slds-text-title" ng-if="!product.recent">
                                                            <span class="slds-text-title">R$ {{formatPrice(product.priceList)}}</span>                                                            
                                                        </div>
                                                        <div class="collapse" ng-if="product.recent">
                                                            <input type="checkbox" id="collapse-{{product.id}}"
                                                                name="collapse" ng-model="product.detail.show"
                                                                ng-checked="product.detail.show" />
                                                            <label for="collapse-{{product.id}}">
                                                                <div class="collapse-body">
                                                                    <div class="slds-grid">
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Último Preço</label>
                                                                                <p>R$
                                                                                    {{formatPrice(product.detail.lastSalesPrice)}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element right">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Quantidade</label>
                                                                                <p>{{product.detail.lastSalesQuantity}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="slds-grid">
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Última Venda</label>
                                                                                <p>{{formatScopeDate(product.detail.lastSalesDate)}}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element right">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Desconto</label>
                                                                                <p>{{formatPrice(product.detail.lastSalesDiscount)}}%
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="slds-grid">
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Preço por
                                                                                    Litro</label>
                                                                                <p>R$ {{formatPrice(product.detail.lastSalesPricePerLitre)}}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="slds-col slds-size_1-of-2">
                                                                            <div class="slds-form-element right">
                                                                                <label class="slds-form-element__label"
                                                                                    for="text-input-id-1">Condição de Pagamento</label>
                                                                                <p>{{product.detail.lastSalesPaymentCondition}} dias</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="collapse-header">
                                                                    <span class="center">
                                                                        <svg class="slds-icon" aria-hidden="true">
                                                                            <use ng-show="!product.detail.show"
                                                                                xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#chevrondown">
                                                                            </use>
                                                                            <use ng-show="product.detail.show"
                                                                                xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#chevronup">
                                                                            </use>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </span>
                                                </span>
                                                <span class="slds-icon_container slds-visual-picker__text-check">
                                                    <svg class="slds-icon slds-icon-text-check slds-icon_x-small" aria-hidden="true">
                                                        <use xlink:href="/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                                    </svg>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div ng-if="(allProducts|filter:termSearch).length == 0">
                            <div class="slds-illustration slds-illustration_small">
                                <svg class="slds-illustration__svg" viewBox="0 0 454 182" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-73.000000, -110.000000)">
                                            <g>
                                                <g transform="translate(75.000000, 240.000000)">
                                                    <polyline vector-effect="non-scaling-stroke"
                                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        transform="translate(375.250000, 18.000000) scale(-1, 1) translate(-375.250000, -18.000000) "
                                                        points="335.5 36 380 0 415 27"></polyline>
                                                    <polyline vector-effect="non-scaling-stroke"
                                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        transform="translate(324.500000, 22.500000) scale(-1, 1) translate(-324.500000, -22.500000) "
                                                        points="303 18 313.5 9 346 36"></polyline>
                                                    <path vector-effect="non-scaling-stroke" d="M0,36.5 L450,36.5"
                                                        class="slds-illustration__stroke-secondary" stroke-width="3"
                                                        stroke-linecap="round"></path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M406.04276,9.26543454 L413,32.7461193 L400.495829,23.8448556 L404.113561,9.30802252 C404.246938,8.772085 404.789525,8.44574518 405.325462,8.57912213 C405.669253,8.66468028 405.942114,8.9257539 406.04276,9.26543454 Z"
                                                        class="slds-illustration__fill-secondary"></path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M311.962964,11.4391572 L318,33 L306.770218,23.1063642 L310.037036,11.4391572 C310.185948,10.9073269 310.7378,10.5969106 311.26963,10.7458231 C311.605963,10.8399963 311.868791,11.1028246 311.962964,11.4391572 Z"
                                                        class="slds-illustration__fill-secondary"
                                                        transform="translate(312.385109, 21.626882) scale(-1, 1) translate(-312.385109, -21.626882) ">
                                                    </path>
                                                </g>
                                                <g transform="translate(83.000000, 173.000000)"
                                                    class="slds-illustration__stroke-secondary" stroke-linecap="round"
                                                    stroke-width="3">
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M18,27.5 L83.0004985,27.5"></path>
                                                    <path vector-effect="non-scaling-stroke" d="M0,27.5 L8,27.5"></path>
                                                </g>
                                                <g transform="translate(274.000000, 111.000000)"
                                                    class="slds-illustration__stroke-secondary" stroke-linecap="round"
                                                    stroke-width="3">
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5">
                                                    </path>
                                                    <path vector-effect="non-scaling-stroke"
                                                        d="M18,27.5 L83.0004985,27.5"></path>
                                                    <path vector-effect="non-scaling-stroke" d="M0,27.5 L8,27.5"></path>
                                                </g>
                                                <g transform="translate(115.000000, 191.000000)">
                                                    <g transform="translate(148.000000, 32.000000) scale(-1, 1) translate(-148.000000, -32.000000) translate(116.000000, 0.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M25,53 C25,55.76 22.76125,58 20,58 C17.24,58 15,55.76 15,53 C15,50.24 17.24,48 20,48 C22.76125,48 25,50.24 25,53 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M8,58 C6.34130214,58 5,59.344354 5,61 C5,62.655646 6.34130214,64 8,64 C9.65717192,64 11,62.655646 11,61 C11,59.344354 9.65717192,58 8,58">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M43.2932416,0 C35.2856577,0 28.3128049,4.40586521 24.6382957,10.9184604 C22.0889739,9.11222859 18.9814709,8.03886643 15.6213524,8.03886643 C6.99160591,8.03886643 0,15.0367986 0,23.6690948 C0,32.302472 6.99160591,39.3004042 15.6213524,39.3004042 C15.8077805,39.3004042 15.9920023,39.2777047 16.1806367,39.2712191 C19.0013272,43.3344299 23.6918145,46 29.011083,46 C32.7848734,46 36.2475826,44.6596485 38.9469293,42.4296926 C40.3512074,42.7193815 41.8051261,42.8739543 43.2932416,42.8739543 C55.1275661,42.8739543 64,33.4569038 64,21.6185732 C64,9.77916158 55.1275661,0 43.2932416,0 Z">
                                                        </path>
                                                    </g>
                                                    <g transform="translate(0.000000, 18.000000)">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M90.5057553,53.0538038 C90.5057553,53.0538038 116.215483,58.0701972 145.433002,58.0701972 C174.650521,58.0701972 204.505755,53.0538038 204.505755,53.0538038 C204.505755,53.0538038 192.222862,60.6378663 185.905056,63.0258453 C179.58725,65.4138243 166.637272,67.3671811 166.637272,67.3671811 C166.637272,67.3671811 153.865271,70.7987363 147.505755,70.9374424 C141.14624,71.0761485 132.54218,68.1108222 132.54218,68.1108222 L106.786672,63.0258453 L90.5057553,53.0538038 Z"
                                                            class="slds-illustration__fill-primary"></path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M84.8198266,43.3368404 C84.8198266,43.3368404 99.4457512,70.425365 147.915957,70.425365 C196.386164,70.425365 214.819827,43.3368404 214.819827,43.3368404"
                                                            class="slds-illustration__stroke-primary" stroke-width="4"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M73,49.5 L88,49.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M211,49.5 L226,49.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M142.74548,0 L153.650377,2.22044605e-16 C154.478804,8.05656105e-16 155.150377,0.671572875 155.150377,1.5 L155.150377,2.98261094 C155.150377,3.11136765 155.100706,3.2351613 155.01171,3.32820944 L146.234757,12.5047677 L155.209827,12.5047677 C156.038254,12.5047677 156.709827,13.1763405 156.709827,14.0047677 L156.709827,14.4270108 C156.709827,15.2554379 156.038254,15.9270108 155.209827,15.9270108 L141.888626,15.9270108 C141.060199,15.9270108 140.388626,15.2554379 140.388626,14.4270108 L140.388626,12.8248256 C140.388626,12.696109 140.438265,12.5723507 140.527212,12.4793109 L149.20663,3.40051458 L142.74548,3.40051458 C141.917053,3.40051458 141.24548,2.7289417 141.24548,1.90051458 L141.24548,1.5 C141.24548,0.671572875 141.917053,1.52179594e-16 142.74548,0 Z"
                                                            class="slds-illustration__fill-primary"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M20,81.5 L390,81.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                        <path vector-effect="non-scaling-stroke" d="M0,81.5 L12,81.5"
                                                            class="slds-illustration__stroke-primary" stroke-width="3"
                                                            stroke-linecap="round"></path>
                                                    </g>
                                                </g>
                                                <g transform="translate(175.500000, 153.000000)">
                                                    <g transform="translate(0.000000, 7.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M19.3444016,2.17529966 L32.8957957,84.445825 C33.0753185,85.5357082 32.3373256,86.5647651 31.2474424,86.7442879 C31.1399954,86.7619863 31.0312825,86.7708798 30.9223876,86.7708798 L2.12566435,86.7708798 C1.02109485,86.7708798 0.125664347,85.8754493 0.125664347,84.7708798 C0.125664347,84.6486417 0.136870913,84.526661 0.159143349,84.4064691 L15.4044726,2.13594377 C15.6057311,1.04986421 16.6493247,0.332574998 17.7354043,0.533833473 C18.5639901,0.687376483 19.2074411,1.34381197 19.3444016,2.17529966 Z">
                                                        </path>
                                                    </g>
                                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                                        stroke-width="3">
                                                        <polygon vector-effect="non-scaling-stroke"
                                                            stroke-linejoin="round"
                                                            points="17 0.709590879 34 94.5 -1.82254212e-12 94.5">
                                                        </polygon>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,8.09449405 C17,92.0999502 17,135.036706 17,136.904762 C17,135.036706 17,92.0999502 17,8.09449405 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,64.2334004 C24.3333333,71.7198767 28,75.6881307 28,76.1381623 C28,75.6881307 24.3333333,71.7198767 17,64.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(22.500000, 70.185781) scale(-1, 1) translate(-22.500000, -70.185781) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M8,50.2334004 C14,57.05321 17,60.6881307 17,61.1381623 C17,60.6881307 14,57.05321 8,50.2334004 Z"
                                                            stroke-linejoin="round"></path>
                                                    </g>
                                                </g>
                                                <g transform="translate(307.500000, 135.000000)">
                                                    <g transform="translate(0.000000, 2.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29.524032,0.669921875 L55.6419593,108.305728 C55.9024257,109.379148 55.2433964,110.460477 54.1699762,110.720943 C54.0155692,110.75841 53.8572476,110.777344 53.69836,110.777344 L2.40272523,110.777344 C1.29815573,110.777344 0.402725233,109.881913 0.402725233,108.777344 C0.402725233,108.601258 0.42597945,108.425943 0.471884777,108.255946 L29.524032,0.669921875 Z">
                                                        </path>
                                                    </g>
                                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                                        stroke-width="3">
                                                        <polygon vector-effect="non-scaling-stroke"
                                                            stroke-linejoin="round"
                                                            points="29 0 56.572466 112.5 0 112.5"></polygon>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29,6.09449405 C29,103.433283 29,153.036706 29,154.904762 C29,153.036706 29,103.433283 29,6.09449405 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29,74.2334004 C41,87.05321 47,93.6881307 47,94.1381623 C47,93.6881307 41,87.05321 29,74.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(38.000000, 84.185781) scale(-1, 1) translate(-38.000000, -84.185781) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M14,61.2334004 C24,72.7198767 29,78.6881307 29,79.1381623 C29,78.6881307 24,72.7198767 14,61.2334004 Z"
                                                            stroke-linejoin="round"></path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M29,48.2334004 C36.3333333,57.05321 40,61.6881307 40,62.1381623 C40,61.6881307 36.3333333,57.05321 29,48.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(34.500000, 55.185781) scale(-1, 1) translate(-34.500000, -55.185781) ">
                                                        </path>
                                                    </g>
                                                </g>
                                                <g transform="translate(347.500000, 166.000000)">
                                                    <g transform="translate(0.000000, 4.000000)"
                                                        class="slds-illustration__fill-secondary">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M19.3444016,2.17529966 L32.8957957,84.445825 C33.0753185,85.5357082 32.3373256,86.5647651 31.2474424,86.7442879 C31.1399954,86.7619863 31.0312825,86.7708798 30.9223876,86.7708798 L2.12566435,86.7708798 C1.02109485,86.7708798 0.125664347,85.8754493 0.125664347,84.7708798 C0.125664347,84.6486417 0.136870913,84.526661 0.159143349,84.4064691 L15.4044726,2.13594377 C15.6057311,1.04986421 16.6493247,0.332574998 17.7354043,0.533833473 C18.5639901,0.687376483 19.2074411,1.34381197 19.3444016,2.17529966 Z">
                                                        </path>
                                                    </g>
                                                    <g class="slds-illustration__stroke-primary" stroke-linecap="round"
                                                        stroke-width="3">
                                                        <polygon vector-effect="non-scaling-stroke"
                                                            stroke-linejoin="round"
                                                            points="17 0.709590879 34 91.5 -1.82254212e-12 91.5">
                                                        </polygon>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,5.09449405 C17,83.0999502 17,123.036706 17,124.904762 C17,123.036706 17,83.0999502 17,5.09449405 Z">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M17,61.2334004 C24.3333333,68.7198767 28,72.6881307 28,73.1381623 C28,72.6881307 24.3333333,68.7198767 17,61.2334004 Z"
                                                            stroke-linejoin="round"
                                                            transform="translate(22.500000, 67.185781) scale(-1, 1) translate(-22.500000, -67.185781) ">
                                                        </path>
                                                    </g>
                                                </g>
                                                <g transform="translate(392.000000, 184.000000)"
                                                    class="slds-illustration__stroke-secondary" stroke-linecap="round"
                                                    stroke-width="3">
                                                    <g
                                                        transform="translate(31.713442, 25.088326) rotate(-15.000000) translate(-31.713442, -25.088326) translate(4.713442, 6.588326)">
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M31.0360707,3.43528591 C31.0360707,3.43528591 40.5802283,0.671893051 42.6488424,10.6908663"
                                                            transform="translate(36.842457, 6.888440) rotate(41.000000) translate(-36.842457, -6.888440) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M40.4282002,10.1797377 C40.4282002,10.1797377 49.9723578,7.4163448 52.0409719,17.435318"
                                                            transform="translate(46.234586, 13.632892) scale(-1, 1) rotate(-41.000000) translate(-46.234586, -13.632892) ">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M0.730284783,29.5865514 C0.730284783,29.5865514 10.2744424,26.8231586 12.3430565,36.8421318">
                                                        </path>
                                                        <path vector-effect="non-scaling-stroke"
                                                            d="M12.7302848,29.5865514 C12.7302848,29.5865514 22.2744424,26.8231586 24.3430565,36.8421318"
                                                            transform="translate(18.536671, 33.039705) scale(-1, 1) translate(-18.536671, -33.039705) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div class="slds-text-longform">
                                    <h3 class="slds-text-heading_medium">Sem resultados para '{{termSearch}}'</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>