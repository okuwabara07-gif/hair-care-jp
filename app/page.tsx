export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif',maxWidth:'900px',margin:'0 auto',padding:'2rem'}}>
      <h1 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'1rem'}}>ヘアケア情報</h1>
      <p style={{color:'#666',marginBottom:'2rem'}}>最新のヘアケア情報をご覧ください。</p>

      <div style={{margin:'2rem 0',padding:'1.5rem',background:'linear-gradient(135deg,#fdf4ff,#fae8ff)',borderRadius:'16px',border:'2px solid #c084fc'}}>
        <p style={{fontSize:'0.7rem',color:'#7e22ce',fontWeight:700,marginBottom:'0.75rem'}}>🏆 おすすめヘアケア</p>
        <a href="https://px.a8.net/svt/ejp?a8mat=4AZR8U+GDF5O2+3HS2+UVBPU" target="_blank" rel="noopener noreferrer sponsored"
          style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px 16px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #c084fc'}}>
          <span style={{fontSize:'1.5rem'}}>💇</span>
          <div>
            <div style={{fontSize:'0.85rem',fontWeight:700,color:'#333'}}>ケラスターゼ - 美容室専売ヘアケア（購入8%）</div>
            <div style={{fontSize:'0.7rem',color:'#7e22ce'}}>サロン専売・プロ愛用の高品質ヘアケア</div>
          </div>
          <span style={{marginLeft:'auto',fontSize:'0.75rem',color:'#9333ea',fontWeight:700}}>詳しく見る →</span>
        </a>
      </div>

      <div style={{margin:'2rem 0',padding:'1rem',background:'linear-gradient(135deg,#faf7ff,#f5eeff)',borderRadius:'16px',border:'1.5px solid #e8d4ff'}}>
        <p style={{fontSize:'0.7rem',color:'#9333ea',fontWeight:700,marginBottom:'0.75rem'}}>おすすめアイテム</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'0.75rem'}}>
          <a href="https://www.amazon.co.jp/?tag=haircolorab22-22" target="_blank" rel="noopener noreferrer sponsored"
            style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 12px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #fce4ec'}}>
            <span style={{fontSize:'1.2rem'}}>📦</span>
            <div><div style={{fontSize:'0.75rem',fontWeight:700,color:'#333'}}>Amazonでさがす</div></div>
          </a>
        </div>
      </div>

      <a href="/blog" style={{display:'inline-block',padding:'12px 24px',background:'#9333ea',color:'white',borderRadius:'12px',textDecoration:'none',fontWeight:700}}>
        記事一覧を見る →
      </a>
    </main>
  )
}
