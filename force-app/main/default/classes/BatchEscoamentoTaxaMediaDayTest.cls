@isTest
public with sharing class BatchEscoamentoTaxaMediaDayTest {

    @isTest
    public static void testBatch() {

        Map<Id, String> lookups = new Map<Id, String>();

        Regional__c regional = (Regional__c)TestFactory.createSObject(new Regional__c());
        insert regional;

        ZonaTransporte__c zonaTransporteDestino = (ZonaTransporte__c)TestFactory.createSObject(new ZonaTransporte__c());
        insert zonaTransporteDestino;

        ZonaTransporte__c zonaTransporteOrigem = (ZonaTransporte__c)TestFactory.createSObject(new ZonaTransporte__c());
        insert zonaTransporteOrigem;

        LocalNegocio__c localNegocio = (LocalNegocio__c)TestFactory.createSObject(new LocalNegocio__c(
            ZonaTransporte__c = zonaTransporteOrigem.Id
        ));
        insert localNegocio;

        Profile profile = [SELECT Id FROM Profile ORDER BY CreatedDate ASC LIMIT 1];
        Id userId = UserInfo.getUserId();
        User user = (User)TestFactory.createSObject(
            new User(
                ProfileId = profile.Id
            ));
        insert user;

        Territorio__c territorio = (Territorio__c)TestFactory.createSObject(new Territorio__c(
            RTV__c      = user.Id,
            Gerente__c  = user.Id,
            Diretor__c  = user.Id,
            Regional__c = regional.Id
        ));
        insert territorio;

        Account parentAccount = (Account)TestFactory.createSObject(
            new Account(
                OwnerId             = user.Id,
                GerenteRegional__c  = user.Id,
                DiretorComercial__c = user.Id,
                ZonaTransporte__c   = zonaTransporteDestino.Id,
                LocalNegocio__c     = localNegocio.Id,
                RegionalVendas__c   = regional.Id,
                RecordTypeId        = SObjectType.Account.getRecordTypeInfosByDeveloperName().get('Hierarquia').getRecordTypeId()
            )
        );
        insert parentAccount;

        Account account = (Account)TestFactory.createSObject(
            new Account(
                OwnerId               = user.Id,
                GerenteRegional__c    = user.Id,
                DiretorComercial__c   = user.Id,
                ZonaTransporte__c     = zonaTransporteDestino.Id,
                LocalNegocio__c       = localNegocio.Id,
                RegionalVendas__c     = regional.Id,
                RevendaAgenciadora__c = parentAccount.Id,
                ParentId              = parentAccount.Id,
                RecordTypeId          = SObjectType.Account.getRecordTypeInfosByDeveloperName().get('Cliente').getRecordTypeId()
            )
        );
        insert account;

        Account account2 = (Account)TestFactory.createSObject(
            new Account(
                OwnerId               = user.Id,
                GerenteRegional__c    = user.Id,
                DiretorComercial__c   = user.Id,
                ZonaTransporte__c     = zonaTransporteDestino.Id,
                LocalNegocio__c       = localNegocio.Id,
                RegionalVendas__c     = regional.Id,
                RevendaAgenciadora__c = parentAccount.Id,
                ParentId              = parentAccount.Id,
                RecordTypeId          = SObjectType.Account.getRecordTypeInfosByDeveloperName().get('Cliente').getRecordTypeId()
            )
        );
        insert account2;

        Campanha__c campanha = (Campanha__c)TestFactory.createSObject(new Campanha__c());
        insert campanha;

        CondicaoPagamento__c condicaoPagamento = (CondicaoPagamento__c)TestFactory.createSObject(
            new CondicaoPagamento__c(
                ExternalId__c = 'CR00'
            )
        );
        insert condicaoPagamento;

        Cultura__c cultura = (Cultura__c)TestFactory.createSObject(new Cultura__c());
        insert cultura;

        Opportunity opportunity = (Opportunity)TestFactory.createSObject(
            new Opportunity(
                LocalNegocio__c = localNegocio.Id,
                AccountId = account.Id,
                RecebedorMercadoria__c = account.Id,
                Campanha__c = campanha.Id,
                CondicaoPagamento__c = condicaoPagamento.Id,
                Cultura__c = cultura.Id,
                ClienteAgenciador__c = account.Id,
                Territorio__c = territorio.Id,
                Regional__c = regional.Id,
                GerenteRegional__c = user.Id,
                DiretorComercial__c = user.Id
            )
        );
        insert opportunity;

        Itinerario__c itinerario = (Itinerario__c)TestFactory.createSObject(
            new Itinerario__c(
                InternalExternalId__c    = zonaTransporteOrigem.ExternalId__c + '-' + zonaTransporteDestino.ExternalId__c,
                ZonaTransporteOrigem__c  = zonaTransporteOrigem.Id,
                ZonaTransporteDestino__c = zonaTransporteDestino.Id
            )
        );
        insert itinerario;

        Order order = (Order)TestFactory.createSObject(
            new Order(
                OpportunityId          = opportunity.Id,
                CondicaoPagamento__c   = condicaoPagamento.Id,
                AccountId              = account.Id,
                RecebedorMercadoria__c = account.Id,
                Territorio__c          = territorio.Id,
                RTV__c                 = user.Id,
                GerenteRegional__c     = user.Id,
                ClienteAgenciador__c   = account.Id,
                Itinerario__c          = itinerario.Id,
                SetorAtividade__c      = '10- Produtos'
            )
        );
        insert order;

        Product2 product = (Product2)TestFactory.createSObject(new Product2());
        insert product;

        ProgramacaoEntrega__c programacaoEntrega = (ProgramacaoEntrega__c)TestFactory.createSObject(
            new ProgramacaoEntrega__c(
                IdOportunidade__c = opportunity.Id
            )
        );
        ProgramacaoEntregaHelper.disableTrigger();
        insert programacaoEntrega;
        ProgramacaoEntregaHelper.enableTrigger();
        
        PricebookEntry pricebookEntry = [SELECT Id, Product2Id, Product2.ExternalId__c FROM PricebookEntry WHERE Product2.ExternalId__c = :product.ExternalId__c];

        Integer thisYear = Date.today().year();
        Integer thisMonth = Date.today().month();
        Integer thisDay = Date.today().day();
        
        CotacaoMoeda__c cotacaoMoedaError = (CotacaoMoeda__c)TestFactory.createSObject(
            new CotacaoMoeda__c(
                Taxa__c = 5.00,
                Data__c = Date.newInstance(thisYear, Date.today().addMonths(-1).month(), 20)
            ));
        insert cotacaoMoedaError;

        Date rightDate = Date.today().addDays(-1).day() == 1 ? Date.today().addDays(-2) : Date.today().addDays(-1);

        CotacaoMoeda__c cotacaoMoeda = (CotacaoMoeda__c)TestFactory.createSObject(
            new CotacaoMoeda__c(
                Data__c = Date.newInstance(thisYear, thisMonth, Date.today().addDays(-1).day()),
                Taxa__c = 20.00
            ));
        insert cotacaoMoeda;

        CotacaoMoeda__c cotacaoMoeda1 = (CotacaoMoeda__c)TestFactory.createSObject(
            new CotacaoMoeda__c(
                Data__c = Date.newInstance(thisYear, thisMonth, thisDay == 10 ? 11 : 10),
                Taxa__c = 15.00
            ));
        insert cotacaoMoeda1;

        NotaFiscal__c notaFiscal1 = (NotaFiscal__c)TestFactory.createSObject(
            new NotaFiscal__c(
                CodigoAgenciador__c = account.Id,
                CodigoCliente__c    = account.Id,
                NrOrdem__c          = order.Id,
                Oportunidade__c     = opportunity.Id,
                Regional__c         = regional.Id,
                Territorio__c       = territorio.Id,
                VendedorRTV__c      = user.Id
            )
        );
        insert notaFiscal1;

        NotaFiscal__c notaFiscal2 = (NotaFiscal__c)TestFactory.createSObject(
            new NotaFiscal__c(
                CodigoAgenciador__c = account2.Id,
                CodigoCliente__c    = account2.Id,
                NrOrdem__c          = order.Id,
                Oportunidade__c     = opportunity.Id,
                Regional__c         = regional.Id,
                Territorio__c       = territorio.Id,
                VendedorRTV__c      = user.Id,
                DataNF__c           = Date.today().addMonths(1)
            )
        );
        insert notaFiscal2;
        
        NotaFiscalItem__c notaFiscalItem1 = (NotaFiscalItem__c)TestFactory.createSObject(
            new NotaFiscalItem__c(
                NotaFiscal__c     = notaFiscal1.Id,
                CodigoMaterial__c = product.Id,
                Cultura__c        = cultura.Id,
                Litros__c         = 50
            )
        );
        insert notaFiscalItem1;

        NotaFiscalItem__c notaFiscalItem2 = (NotaFiscalItem__c)TestFactory.createSObject(
            new NotaFiscalItem__c(
                NotaFiscal__c     = notaFiscal1.Id,
                CodigoMaterial__c = product.Id,
                Cultura__c        = cultura.Id,
                ValorTotalItem__c = 20.0000,
                Litros__c         = 50
            )
        );
        insert notaFiscalItem2;

        NotaFiscalItem__c notaFiscalItem3 = (NotaFiscalItem__c)TestFactory.createSObject(
            new NotaFiscalItem__c(
                NotaFiscal__c     = notaFiscal2.Id,
                CodigoMaterial__c = product.Id,
                Cultura__c        = cultura.Id,
                ValorTotalItem__c = 50.0000,
                Litros__c         = 50
            )
        );
        insert notaFiscalItem3;

        Escoamento__c escoamento1 = (Escoamento__c)TestFactory.createSObject(
            new Escoamento__c(
                Produto__c          = product.Id,
                // RSocial__c          = account.Id,
                QuantidadeLitros__c = 50
            )
        );
        EscoamentoHelper.disableTrigger();
        insert escoamento1;
        EscoamentoHelper.enableTrigger();

        BatchEscoamentoTaxaMediaDay batch = new BatchEscoamentoTaxaMediaDay();
        batch.execute(null, Database.query(batch.start(null).getQuery()));
        batch.finish(null);

        List<Escoamento__c> escoamentoList = [SELECT Id, ValorBrutoDolar__c FROM Escoamento__c WHERE Id = :escoamento1.Id];

        List<CotacaoMoeda__c> cotacaoMoedaBase = [SELECT Id, TaxaMedia__c FROM CotacaoMoeda__c WHERE Id = :cotacaoMoeda.Id];

        if (Date.today().day() != 1) {
            System.assertEquals(cotacaoMoedaBase[0].TaxaMedia__c, escoamentoList[0].ValorBrutoDolar__c);
        }

    }

    @isTest
    public static void testSchedule() {

        Test.startTest();
        
        List<CronTrigger> schedule = [SELECT Id, CronJobDetail.Name, CronExpression, TimesTriggered, NextFireTime 
                                        FROM CronTrigger 
                                       WHERE CronJobDetail.Name = 'Update Escoamento Taxa Média Daily'];
        
        String jobId;
        if (schedule.size() == 0){
            jobId = BatchEscoamentoTaxaMediaDay.setSchedule();
        } else {
            System.abortJob(schedule[0].Id);
            jobId = BatchEscoamentoTaxaMediaDay.setSchedule();
        }
        CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered, NextFireTime 
                            FROM CronTrigger 
                           WHERE Id = :jobId];

        Test.stopTest();

        System.assertEquals('0 0 0 * * ? *', ct.CronExpression);
        System.assertEquals(Datetime.now().addDays(1).day(), ct.NextFireTime.day());
    }
}