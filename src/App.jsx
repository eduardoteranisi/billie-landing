import React from 'react';
// Importação do novo ícone local
import polvoMinimal from './assets/polvo-minimal.png';

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-100 font-sans antialiased">
      
      {/* HEADER / NAV */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-800/50 bg-[#111111]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* LOGO DO TOQUE (Nav) */}
          <img 
            src={polvoMinimal} 
            alt="Billie Logo" 
            className="h-9 w-auto object-contain opacity-90"
          />
          <div className="text-2xl font-bold text-gray-50 tracking-tighter">Billie <span className="text-purple-400"></span></div>
        </div>
        <a href="https://github.com/eduardoteranisi/billie-project/releases" 
           className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-4 py-2 rounded-lg font-medium transition duration-200">
          Ver no GitHub
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        {/* LOGO GRANDE (Hero) */}
        <img 
          src={polvoMinimal} 
          alt="Minimal Billie Octopus" 
          className="w-auto h-48 mx-auto mb-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        />
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-50 leading-tight mb-8 tracking-tighter">
          Sua fatura no <span className="text-purple-400">Notion,</span> organizado por <span className="text-teal-400">IA.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          O Billie lê seu PDF, traduz nomes confusos e envia tudo categorizado direto para o Notion. 100% local, 100% no seu controle.
        </p>
        <a href="https://github.com/eduardoteranisi/billie-project/releases/latest/download/Billie-Project_v1.0.zip" 
           className="inline-block bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold text-xl px-12 py-5 rounded-2xl shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(45,212,191,0.7)]">
          ⬇️ Baixar Grátis (Windows)
        </a>
        <p className="mt-6 text-sm text-gray-600">Software seguro, de código aberto e sem mensalidades.</p>
      </section>

      {/* PRIVACY FIRST (Local & BYOK) */}
      <section className="bg-purple-950/20 py-24 border-y border-purple-800/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-50 mb-16 tracking-tight">Sua privacidade em primeiro lugar.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-[#111111]/60 border border-purple-900 rounded-3xl shadow-inner">
              <h4 className="font-bold text-xl mb-3 text-teal-300">🔒 100% Local</h4>
              <p className="text-gray-300">O aplicativo roda diretamente no seu computador. Não temos servidores intermediários.</p>
            </div>
            <div className="p-8 bg-[#111111]/60 border border-purple-900 rounded-3xl shadow-inner">
              <h4 className="font-bold text-xl mb-3 text-teal-300">🤖 Inteligência Cega</h4>
              <p className="text-gray-300">A IA analisa apenas os nomes dos estabelecimentos. Seus valores e saldo nunca são enviados à nuvem.</p>
            </div>
            <div className="p-8 bg-[#111111]/60 border border-purple-900 rounded-3xl shadow-inner md:col-span-2">
              <h4 className="font-bold text-xl mb-3 text-teal-300">🔑 Traga Sua Chave (BYOK)</h4>
              <p className="text-gray-300">Seus dados financeiros são processados usando as suas próprias chaves de API da Notion e do Google. O desenvolvedor tem zero acesso às suas contas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-gray-50">Tudo em 3 passos</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-2xl bg-[#111111] border border-gray-800">
              <div className="text-5xl mb-6 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]">🔗</div>
              <h3 className="text-xl font-bold mb-2 text-gray-50">1. Conecte seu Notion e sua IA</h3>
              <p className="text-gray-400 text-sm">Insira suas chaves apenas uma vez. Elas ficam criptografadas na sua máquina.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#111111] border border-gray-800">
              <div className="text-5xl mb-6 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]">📄</div>
              <h3 className="text-xl font-bold mb-2 text-gray-50">2. Selecione o PDF</h3>
              <p className="text-gray-400 text-sm">Pegue a sua fatura e mande para o aplicativo. Seguro e direto.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-[#111111] border border-gray-800">
              <div className="text-5xl mb-6 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]">✨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-50">3. Sincronize com o Notion</h3>
              <p className="text-gray-400 text-sm">O Billie limpa e organiza os dados. Abra seu Notion e veja tudo pronto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-gray-700 text-sm border-t border-gray-800/50">
        <div className="flex items-center gap-3 justify-center mb-4 opacity-50">
          {/* LOGO PEQUENO (Footer) */}
          <img src={polvoMinimal} alt="Minimal Billie Icon" className="w-6 h-6 object-contain" />
          <p>Feito por desenvolvedores independentes.</p>
        </div>
        <p>Distribuído sob a licença MIT.</p>
      </footer>

    </div>
  );
}

export default App;
