import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Cards from './Cards'; // Importe seus componentes necessários
import arrow from '../../../public/images/down-arrow.png'; // Certifique-se do caminho correto para a seta
import './Soluctions.css'; // Importe o CSS para manter os estilos originais

const Soluctions = () => {
  const [isVisibleLegal, setIsVisibleLegal] = useState(false);
  const [isVisibleNegociacao, setIsVisibleNegociacao] = useState(false);
  const [isVisibleTreinamento, setIsVisibleTreinamento] = useState(false);
  const [isVisibleAnaliseViabilidade, setIsVisibleAnaliseViabilidade] = useState(false);
  const [isVisibleTransparencia, setIsVisibleTransparencia] = useState(false);

  const handleClickLegal = () => {
    setIsVisibleLegal(!isVisibleLegal);
    
  };

  const handleClickNegociacao = () => {
    setIsVisibleNegociacao(!isVisibleNegociacao);
   
  };

  const handleClickTransparencia = () => {
    setIsVisibleTransparencia(!isVisibleTransparencia);
    
  };


  const handleClickTreinamento = () => {
    setIsVisibleTreinamento(!isVisibleTreinamento);
    
  };

  const handleClickAnaliseViabilidade = () => {
    setIsVisibleAnaliseViabilidade(!isVisibleAnaliseViabilidade);
    ;
  };

  return (
    <section className='soluctions'>
      <div className='soluctions-container'>
        <div className='soluctions-objectives'>
          <div className='objectives-title'>
            <h2>Nossos objetivos:</h2>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='objectives-cards'>
              <Cards />
            </div>
          </motion.div>
        </div>

        <div className='soluctions-tree'>
          <div className='soluctions-tree-left'>
            <div className='soluctions-tree-leaf'>
              <button onClick={handleClickLegal} className='tree-button'>
                {isVisibleLegal ? 'Compliance Legal ⬆' : 'Compliance Legal ⬇'}
              </button>
              <motion.div
                initial={{ y: 100, x: -60, opacity: 0 }}
                animate={isVisibleLegal ? { y: 0, x: -60, opacity: 1 } : { y: 100, x: -60, opacity: 0 }}
                transition={{ duration: 1 }}
                className='tree-text'
              >
                <p>
                  Adesão às leis, regulamentos e normas que regem uma organização, garantindo que suas atividades estejam
                  em conformidade com as exigências legais.
                </p>
              </motion.div>
            </div>
            <div className='soluctions-tree-leaf'>
              <button onClick={handleClickNegociacao} className='tree-button'>
                {isVisibleNegociacao ? 'Negociação e Estratégia ⬆' : 'Negociação e Estratégia ⬇'}
              </button>
              <motion.div
                initial={{ y: 100, x: -60, opacity: 0 }}
                animate={isVisibleNegociacao ? { y: 0, x: -60, opacity: 1 } : { y: 100, x: -60, opacity: 0 }}
                transition={{ duration: 1 }}
                className='tree-text'
              >
                <p>
                  Estratégia e negociação licitatória envolvem táticas para competir e ganhar contratos públicos ou
                  privados, ajustando termos, condições e preços para alcançar acordos vantajosos e otimizar propostas
                  de valor.
                </p>
              </motion.div>
            </div>
            <div className='soluctions-tree-leaf'>
              <button onClick={handleClickTransparencia} className='tree-button'>
                {isVisibleTransparencia ? 'Transparencia ⬆' : 'Transparencia ⬇'}

              </button>
              <motion.div
                initial={{ y: 100, x: -60, opacity: 0 }}
                animate={isVisibleTransparencia ? { y: 0, x: -60, opacity: 1 } : { y: 100, x: -60, opacity: 0 }}
                transition={{ duration: 1 }}
                className='tree-text'
              >
                <p>
                Ação de forma aberta e acessível, oferecendo clareza e visibilidade sobre decisões, processos e 
                informações. Em contextos governamentais e empresariais, essa prática promove confiança e responsabilidade.
                </p>
              </motion.div>
            </div>
          </div>
          <div className='soluctions-tree-line'></div>
          <div className='soluctions-tree-right'>
            <div className='soluctions-tree-leaf'>
              <button onClick={handleClickAnaliseViabilidade} className='tree-button'>
                {isVisibleAnaliseViabilidade ? 'Análise de Viabilidade ⬆' : 'Análise de Viabilidade ⬇'}
                
              </button>
              <motion.div
                initial={{ y: 100, x: -60, opacity: 0 }}
                animate={isVisibleAnaliseViabilidade ? { y: 0, x: -60, opacity: 1 } : { y: 100, x: -60, opacity: 0 }}
                transition={{ duration: 1 }}
                className='tree-text'
              >
                <p>
                  Avaliação um projeto ou proposta para determinar sua praticabilidade e rentabilidade, considerando
                  aspectos técnicos, financeiros e de mercado.
                </p>
              </motion.div>
            </div>
            <div className='soluctions-tree-leaf'>
              <button onClick={handleClickTreinamento} className='tree-button'>
              {isVisibleTreinamento ? 'Treinamento ⬆' : 'Treinamento ⬇'}
                
              </button>
              <motion.div
                initial={{ y: 100, x: -60, opacity: 0 }}
                animate={isVisibleTreinamento ? { y: 0, x: -60, opacity: 1 } : { y: 100, x: -60, opacity: 0 }}
                transition={{ duration: 1 }}
                className='tree-text'
              >
              <p>
                São programas de capacitação destinados a ensinar técnicas e procedimentos para participar de processos
                de licitação, visando a preparação de propostas competitivas e a compreensão das normas e
                regulamentos envolvidos.
              </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soluctions;
