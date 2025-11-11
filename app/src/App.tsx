import './App.css';

export default function App() {
  return (
    <div className="outer-background">
    

      {/* DARK MAIN CONTENT */}
      <div className="inner-page">
        <main className="main">
          {/* Welcome Section */}
          <section className="welcome">
            <h1>Willkommen auf unserem Blog!</h1>
            <p>Entdecke spannende Artikel, Neuigkeiten und bevorstehende Highlights.</p>
          </section>

          {/* Announcements */}
          <section className="announcements">
			<h2>Ankündigungen</h2>
            <div className="announcement-list">
				<div className="announcement">
					<img src="/src/public/images/Laracon2.png" alt="Laracon EU 2025" />
					<div className="announcement-text">
					<h3>Laracon EU 2025</h3>
					<p>10 November 2025</p>
					<p>Laravel, Next.js, Payload, React, Schnittstellen & Integration, API Entwicklung, GraphQL</p>
					</div>
				</div>

				<div className="announcement announcement-stack">
					<img src="/src/public/images/Laracon1.png" alt="Laracon EU 2025" />
					<div className="announcement-text">
					<h3>Laracon EU 2025</h3>
					<p>10 November 2025</p>
					<p>Laravel, Next.js, Payload, React, Schnittstellen & Integration, API Entwicklung, GraphQL</p>
					</div>
				</div>
			</div>
          </section>

          {/* Search Section */}
          <section className="search-section">
            <h2>Finde den Artikel, der zu dir passt</h2>
            <input type="text" placeholder="Suche..." className="search-bar" />
            <div className="hashtags-search">
              {['Laravel', 'React', 'Next.js', 'API', 'Design'].map(tag => (
                <span key={tag} className="hashtag">{tag}</span>
              ))}
            </div>
          </section>

          {/* Articles */}
          <section className="article-section">
            <div className="article-card">
              <img src="src/public/images/article1.png" alt="Artikel" />
              <div className="article-text">
                <div className="hashtags-article">
                  	<span className="hashtag">Laravel</span>
                  	<span className="hashtag">React</span>                 
					<span className="hashtag">Statamic</span>
                  	<span className="hashtag">Akeno</span>
                </div>
                <h3>Artikel TITEL</h3>
                <p>
                  Laravel, Next.js, Payload, React, Schnittstellen & Integration, API Entwicklung, GraphQL
                </p>
                <a href="#">Mehr entdecken →</a>
              </div>
            </div>

            <div className="article-card reverse">
              <img src="src/public/images/article2.png" alt="Artikel" />
              <div className="article-text">
                <div className="hashtags-article">
                  	<span className="hashtag">Laravel</span>
                  	<span className="hashtag">React</span>
					<span className="hashtag">Statamic</span>
                	<span className="hashtag">Akeno</span>
                </div>
                <h3>Artikel TITEL</h3>
                <p>
                  Laravel, Next.js, Payload, React, Schnittstellen & Integration, API Entwicklung, GraphQL
                </p>
                <a href="#">Mehr entdecken →</a>
              </div>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
}
