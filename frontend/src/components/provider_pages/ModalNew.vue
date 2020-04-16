<template>
  <div class="modal-new w-100 d-flex justify-content-center">
    <div>
      <button  class="new" @click="showModal">Solicitar</button>

      <b-modal ref="my-modal" hide-footer title="Nova solicitação">
        <div class="d-block">
          <div class="form-data">
            <b-form>
              <b-row>
                  <b-col md="12" sm="12">
                      <b-form-group label="Quantidade aproximada (litros):" label-for="quantidade">
                          <b-form-input
                              id="quantidade" type="number"                                                     
                          />       
                      </b-form-group>
                  </b-col>
              </b-row>
              <b-row>
                  <b-col md="12" sm="12">
                      <b-form-group label="Data:" label-for="data">
                          <b-form-input
                              id="data" type="date"                                                     
                          />       
                      </b-form-group>
                  </b-col>
              </b-row>
            </b-form>
          </div>
        </div>
        <div class="modal-buttons">
          <button class="close_" @click="hideModal">Fechar</button>
          <button class="send" @click="hideModal">Enviar</button>
        </div>
      </b-modal>
    </div>
        
  </div>
</template>
<script>
export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    }
}
</script>
<style lang="css">
    .modal-new .new{
       background-color: #0d0d0d;
       margin: 0 15px;
       padding: 15px;
       width: 170px;
       color: #fff;
       font-size: 1.3rem;
       border-radius: 3px;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
       transition: filter 0.2s;
   }
   .modal-new .new:hover{
        filter: brightness(80%)
    }
  .modal-buttons{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .modal-buttons button{
    padding: 15px;
    font-size:  1.2rem;
    border-radius: 3px;
    transition: filter 0.2s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .modal-buttons button:hover{
    filter: brightness(80%)
  }
  .modal-buttons .close_{
    background-color: rgba(216, 0, 0, 0.87);
    color: #fff;
    margin-right: 15px;
  }
  .modal-buttons .send{
    background-color: rgba(20, 70, 5, 0.87);
    color: #fff;
  }
</style>