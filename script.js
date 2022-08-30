tinymce.init({
    selector: "#mytextarea",
    plugins: "powerpaste searchreplace autolink print link image lists advlist table charmap pagebreak tinymcespellchecker wordcount wordcount autosave",
    toolbar: "undo redo print | styleselect | fontselect fontsizeselect fontfamily bold italics underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify |lineheight | numlist bullist indent outdent | removeformat | spellcheckdialog",
    content_style: `
              body {
                  background: #fff;
                }
              @media (min-width: 840px) {
                  html {
                     background: #eceef4;
                     min-height: 100%;
                     padding: 0 .5rem
                    }
                  body {
                     margin: 1rem auto 0;
                     max-width: 820px;
                     min-height: calc(100vh - 1rem);
                     padding:4rem 6rem 6rem 6rem
                    }
                }
            `,
      skin: "material-outline",
      icons: "material",
      autosave_restore_when_empty: true

});