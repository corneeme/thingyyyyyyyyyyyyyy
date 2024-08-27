import './Blog.css';

import React from 'react';
import Header from '../components/Header/Header';
import BlogNewsBlock from '../components/NewsBlock';
import Footer from '../components/Footer/Footer';
import VideoPost from '../components/VideoPost';

const Blog = () => {
  const posts = [
    {
      publisher: 'gamecrate.com',
      title: 'Interview: Motion Twin talks about developing Dead Cells',
      link: 'https://www.gamecrate.com/',
      text: 'Motion Twin is a small, French game development company located in Bordeaux, France. From there, the 10-man team has created a multitude of mobile games. But what happens when they shift over into making a game for PC/console? That result is Dead Cells, a roguelike, Castlevania-inspired, action-platformer. The game combines all of the fun of platformers, without the hassle of trick edges, with the fun of quick and visceral combat in a non-hardware intensive package.',
      comment: '',
    },
    {
      publisher: 'rockpapershotgun.com',
      title: "How Dead Cells' pokeball keeps me coming back",
      link: 'https://www.rockpapershotgun.com/how-dead-cells-pokeball-keeps-me-coming-back-for-more',
      text: "Dead Cells is a fantastic game for many reasons, but this is an article about one little item that solves one very big problem. It's about the Hunter's Grenade.",
      comment:
        "Learn more about that “pokeball” that helps you gather blueprints. Gotta catch 'em all!",
    },
    {
      publisher: 'gamasutra.com',
      title:
        'Art Design Deep Dive: Using a 3D pipeline for 2D animation in Dead Cells',
      link: 'https://www.gamedeveloper.com/latest-news',
      text: '"To make up for the lack of bandwidth and still deliver on quality, we had to find a pipeline that could give us great looking pixel art, without having to hand draw each and every retake," writes Dead Cells artist Thomas Vasseur.',
      comment:
        "Thomas Vasseur, one of the two artists behind Dead Cells, wrote a featured article on Gamasutra on how to handle loads of work when understaffed through the use of 3D in a 2D game. If you're in this case too, you might some of his insights useful!",
    },
    {
      publisher: 'venturebeat.com',
      title:
        "Motion Twin's Dead Cells will slash-and-jump from PCs to consoles later this year",
      link: 'https://venturebeat.com/games/motion-twins-dead-cells-will-slash-and-jump-from-pcs-to-consoles-later-this-year/',
      text: 'The stylish roguelike dungeon-crawler Dead Cells launched on PC in Early Access, and developer Motion Twin announced today that the full game will debut on Xbox One, PlayStation 4, and Nintendo Swi…',
      comment: '',
    },
    {
      publisher: 'destructoid.com',
      title:
        'Metroidvania roguelite Dead Cells coming to Nintendo Switch, PS4, Xbox One',
      link: 'https://www.destructoid.com/metroidvania-roguelite-dead-cells-coming-to-nintendo-switch-ps4-xbox-one-484283.phtml',
      text: "Dead Cells, y'all -- it's legit. You don't even have to take it from me. Ray had a lot of praise for Motion Twin's Castlevania-inspired action-platformer roguelite in his Steam Early Access review last year. If you were hoping the game woul...",
      comment: '',
    },
    {
      publisher: 'engadget.com',
      title: "Indie hit 'Dead Cells' is coming to consoles this year",
      link: 'https://www.engadget.com/2018-01-25-indie-hit-dead-cells-is-coming-to-consoles-this-year.html',
      text: "Indie hit 'Dead Cells' is coming to PS4, Xbox One and Switch sometime in 2018.",
      comment: '',
    },
    {
      publisher: 'ign.com',
      title: 'Dead Cells Announced for Nintendo Switch, PS4, Xbox One - IGN',
      link: 'https://www.ign.com/articles/2018/01/25/dead-cells-announced-for-nintendo-switch',
      text: "The Switch version will launch alongside the game's 1.0 PC launch.",
      comment:
        'Thanks IGN for this great article about the upcoming console versions of Dead Cell !',
    },
    {
      publisher: 'polygon.com',
      title: 'Dead Cells confirmed for PS4, Switch, Xbox One',
      link: 'https://www.polygon.com/2018/1/25/16930122/dead-cells-consoles-ps4-switch-xbox-one-trailer',
      text: "Coming 'later this year,' and 'ideally' alongside final PC version",
      comment: '',
    },
    {
      video: true,
      link: 'https://www.youtube.com/embed/qTmqSNCjgJE?si=iha3hN4lR7slkj0k',
    },
    {
      publisher: 'rockpapershotgun.com',
      title: 'Best PC games of 2017',
      link: 'https://www.rockpapershotgun.com/best-pc-games-of-2017',
      text: "The calendar's doors have been opened and the games inside have been eaten. But fear not, latecomer - we've reconstructed the list in this single post for easy",
      comment: 'Thanks RPS for electing Dead Cells best PC game of 2017!',
    },
    {
      video: true,
      link: 'https://www.youtube.com/embed/MpvSOxQ_orA?si=27PIqSebe1q9SS-B',
    },
    {
      publisher: 'rockpapershotgun.com',
      title: 'Dead Cells boasts brutality but its real joy is consistency',
      link: 'https://www.rockpapershotgun.com/dead-cells-boasts-brutality-but-its-real-joy-is-consistency',
      text: 'The metroidvania Dead Cells is one of our favourite games this year, not because it is brutal but because it is consistent',
      comment: '',
    },
    {
      publisher: 'eurogamer.net',
      title:
        'Brilliant early access "roguevania" Dead Cells gets its big new Brutal Update tomorrow',
      link: 'https://www.eurogamer.net/dead-cells-new-brutal-update-due-tomorrow',
      text: 'Developer Motion Twin\'s excellent early access "roguevania" Dead Cells is getting some major additions and revisions tomorrow - including a completely overh…',
      comment: '',
    },
    {
      publisher: 'destructoid.com',
      title: "Dead Cells' Brutal Update adds tons of new content",
      link: 'https://www.destructoid.com/dead-cells-brutal-update-adds-tons-of-new-content-472515.phtml',
      text: "Dead Cells took me by surprise. The self-proclaimed 'RogueVania' takes inspiration from a handful of other games and mixes them into a challenging, rewarding mix. Though it's still in Early Access, Motion Twin's procedural platformer is a p...",
      comment: '',
    },
    {
      publisher: 'pcgamer.com',
      title: "Dead Cells lands on GOG's Games in Development initiative",
      link: 'https://www.pcgamer.com/dead-cells-lands-on-gogs-games-in-development-initiative/',
      text: 'With a 25 percent limited-time discount.',
      comment: '',
    },
    {
      publisher: 'techraptor.net',
      title: "Dead Cells Preview - When Perfect Isn't Good Enough",
      link: 'https://techraptor.net/gaming/previews/dead-cells-preview-when-perfect-isnt-good-enough',
      text: "Our Dead Cells preview covers Motion Twin's Roguevania hack and slasher permadeath game that just released a significant update.",
      comment: '',
    },
    {
      publisher: 'engadget.com',
      title: "What we're playing: 'Wipeout', 'Dead Cells' and 'Danger Zone'",
      link: 'https://www.engadget.com/2017-07-17-gaming-irl-july-2017.html',
      text: 'Another month, another great set of games.',
      comment: '',
    },
    {
      publisher: 'pcgamer.com',
      title:
        "Dead Cells' combat evolved from tower defense games and Team Fortress 2",
      link: 'https://www.pcgamer.com/dead-cells-combat-evolved-from-tower-defense-games-and-team-fortress-2/',
      text: "Dead Cells' producer says the rogue-lite started with a tower defense aspect before influences from TF2 and fighting games seeped in.",
      comment: '',
    },
    {
      publisher: 'gamespew.com',
      title:
        'Dead Cells Puts Just Enough Roguelike Into Your Metroidvania - GameSpew',
      link: 'https://www.gamespew.com/2017/06/dead-cells-roguelike-metroidvania/',
      text: "Available now via Early Access on Steam, Dead Cells is already a compelling and utterly addictive experience, and it's only set to get better.",
      comment: '',
    },
    {
      publisher: 'pcgamesn.com',
      title:
        'The engineer from Team Fortress 2 is the unlikely inspiration for the hero of Dead Cells',
      link: 'https://www.pcgamesn.com/dead-cells/dead-cells-team-fortress-2',
      text: 'Today, Dead Cells may look like a Metroidvania drizzled in Dark Souls, but when it started out it was more like a tower defence game, melee weapons barely featured. Dead Cells is one of the best gam',
      comment: '',
    },
  ];
  return (
    <>
      <Header />
      <div className='posts-container'>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                {!post.video && (
                  <BlogNewsBlock
                    publisher={post.publisher}
                    title={post.title}
                    link={post.link}
                    text={post.text}
                    comment={post.comment}
                  />
                )}
                {post.video && <VideoPost link={post.link} />}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
