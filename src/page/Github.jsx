import React, { useEffect, useState } from 'react';
import { site } from '../site';

const notes = {
  BTRC: 'Maps, roles, and a demo GPS feed for a final-year transport platform.',
  LifeOS: 'Documents, bills, family tasks, and an assistant, built around life in Bangladesh.',
  'food-client': 'A later pass at the food platform, with menus and accounts.',
  podfolio: 'This portfolio.',
  'Assignment-11-client': 'Food Sharing, the restaurant site that is live on Vercel.',
};

const featured = ['BTRC', 'LifeOS', 'food-client', 'podfolio'];

const fallbackRepos = featured.map((name) => ({
  name,
  language: name === 'BTRC' || name === 'LifeOS' ? 'TypeScript' : 'JavaScript',
  pushed_at: name === 'BTRC' ? '2026-10-22T18:00:00Z' : '2026-10-14T18:00:00Z',
  html_url: `https://github.com/Meheraj1000/${name}`,
}));

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDate = (iso) => {
  const date = new Date(iso);
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

const Github = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(fallbackRepos);

  useEffect(() => {
    const user = site.githubUser;

    fetch(`https://api.github.com/users/${user}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => data && setProfile(data))
      .catch(() => {});

    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!Array.isArray(data)) return;
        const byName = new Map(data.filter((repo) => !repo.fork).map((repo) => [repo.name, repo]));
        const picked = featured.map((name) => byName.get(name)).filter(Boolean);
        if (picked.length) setRepos(picked);
      })
      .catch(() => {});
  }, []);

  const repoCount = profile?.public_repos ?? 46;
  const latest = repos[0] ? formatDate(repos[0].pushed_at) : '—';

  return (
    <section id="github" className="band">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">GitHub</p>
            <h2>Public work, still moving.</h2>
          </div>
          <p className="lede">
            {repoCount} public repositories. The squares are the last year on GitHub,
            and the list is the work behind them.
          </p>
        </div>

        <div className="github-panel">
          <div className="github-stats">
            <div>
              <strong>{repoCount}</strong>
              <span>Public repos</span>
            </div>
            <div>
              <strong>{latest}</strong>
              <span>Latest push</span>
            </div>
            <div>
              <strong>2024</strong>
              <span>On GitHub since</span>
            </div>
          </div>

          <img className="github-chart" src={site.githubChart} alt="GitHub contributions for Meheraj1000 over the last year" />

          <div className="github-foot">
            <p>Contributions from the last twelve months.</p>
            <a className="text-link" href={site.github} target="_blank" rel="noreferrer">Open profile</a>
          </div>
        </div>

        <div className="repo-list">
          {repos.map((repo) => (
            <a key={repo.name} className="repo-row" href={repo.html_url} target="_blank" rel="noreferrer">
              <div>
                <strong>{repo.name === 'BTRC' ? 'Nirapad Transit' : repo.name}</strong>
                <p>{notes[repo.name]}</p>
              </div>
              <span>
                {repo.language || 'Code'}
                <em>{formatDate(repo.pushed_at)} {new Date(repo.pushed_at).getFullYear()}</em>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Github;
