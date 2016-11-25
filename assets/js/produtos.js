(function ($) {

    // Defini o tamanho do content Produtos em relação ao tamanho da tela
    $('.contentGeral').css('width', window.innerWidth);
    $('.contentGeral').css('height', window.innerHeight);

    // Inclui o Header dos Produtos
    $('body .headerProdutos').load('headerProdutos.html');

    // Exibe o sub-menu de essências
    $('#essencias').on('click', function() {
        $('.categorias').css('display','none');
        $('.essencias').css('display','block');

    });

    // Exibe o sub-menu de carvões
    $('#carvoes').on('click', function() {
        $('.categorias').css('display','none');
        $('.carvoes').css('display','block');

    });

    // Exibe o sub-menu de roshs
    $('#roshs').on('click', function() {
        $('.categorias').css('display','none');
        $('.roshs').css('display','block');

    });

    // Exibe o sub-menu de roshs
    $('#stems').on('click', function() {
        $('.categorias').css('display','none');
        $('.stems').css('display','block');

    });

    // Exibe o menu de categorias
    $('.voltar').on('click', function() {
        $('.essencias').css('display','none');
        $('.carvoes').css('display','none');
        $('.roshs').css('display','none');
        $('.stems').css('display','none');

        $('.categorias').css('display','block');
    });

})(jQuery);
