<template>
    <div class="main-content">
        <b-row >
            <b-col md="6" sm="12">
                <div class="content-form ml-4">
                    <h1 class="title-info">Entre em contato</h1>
                    <hr>
                    <form>
                        <div class="form-group">
                            <label for="nome">Nome:</label>
                            <input placeholder="Digite seu nome">
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail:</label>
                            <input placeholder="Digite seu email" type="email">
                        </div>
                        <div class="form-group">
                            <label for="email">Mensagem:</label>
                            <textarea placeholder="Digite sua mensagem" ></textarea>
                        </div>
                    </form>
                    <button type="submit" class="button">ENVIAR</button>
                </div>
            </b-col>
            <b-col md="6" sm="12">
                <div class="contact-information">
                
                    <div class="title-info">
                        <p>Instituto Federal de Educação, Ciência e Tecnologia do 
                        Rio Grande do Norte | Nova Cruz</p>
                    </div>
                
                    <ul>
                        <li>
                            <div class="item-information">
                                <i class="fa fa-map-marker"></i>
                                <p>Av. José Rodrigues de Aquino Filho, Nº 640, RN 120, Alto de Santa Luzia |
                                Nova Cruz-RN | CEP: 59215-000| CNPJ: 10.877.412/0015-63</p>
                            </div>
                        </li>
                        <li>
                            <div class="item-information">
                                <i class="fa fa-envelope"></i>
                                <p>cocsev.nc@ifrn.edu.br</p>
                            </div>
                        </li>
                        <li>
                            <div class="item-information">
                                <i class="fa fa-phone"></i>
                                <p>(84) 4005-4107</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .contact-information{
        margin: 20px 25px auto 0;
    }
    .contact-information ul{
        list-style-type:none;
    }
    .main-content .content-form{
        border-right: 3px solid #2a3756;
    }
    .item-information {
        display:flex;
        flex-direction: row;
        justify-content: end;
        padding-top: 25px;
        margin-right: 30px;
    }
    .item-information i{
        margin-right: 15px;
        font-size: 20px;
        padding-top: 3px;
        color: #2A3756;
    }
    .item-information p{
        font-size: 16px;
        color:#0d0d0d;
    }
    @media only screen and (max-device-width: 700px) {
        .main-content .content-form{
            padding-left: 0px;
            padding-right: 30px;
        }
        .contact-information{
            padding-left: 5px;
        }
        .main-content .content-form{
            border-right:none;
            
        }
    }
</style>