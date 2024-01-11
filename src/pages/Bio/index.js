import React from 'react';
import { Button, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const styles = {
  sectionStyle: {
    display: 'flex',
    alignItems: 'center'
  },
  smallSectionStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    minWidth: '35vw',
    minHeight: '35vw',
    backgroundColor: 'black',
    border: '5px solid #ff7d00',
    borderRadius: '15px',
    margin: 20,
    backgroundImage: `url(${require('../../images/violin-headshot.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
};

export default function Bio() {
  const smallScreen = useMediaQuery({ query: '(max-width: 1500px)' });

  return (
    <section
      style={{
        backgroundColor: 'var(--background-color)',
        minHeight: 'calc(100vh - 100px)'
      }}
    >
      <h1 className="page-title">Biography</h1>
      <Divider></Divider>
      <div
        style={!smallScreen ? styles.sectionStyle : styles.smallSectionStyle}
      >
        <div
          className="fade-in"
          style={
            !smallScreen
              ? styles.imageContainer
              : {
                  ...styles.imageContainer,
                  minWidth: '60vw',
                  minHeight: '60vw'
                }
          }
        ></div>
        <div
          className="fade-in"
          style={{ backgroundColor: 'var(--background-color)' }}
        >
          <p className="text" style={{ fontSize: '20px', padding: '30px' }}>
            Mike Miller has always felt inspired to teach and perform. These
            passions have combined perfectly through the violin. Currently,
            Miller performs as Concertmaster of SCVSO under the direction of
            Kris Tjornehoj and as a member of the Uppsala String Quartet. Having
            received a Master’s in Violin Performance and Pedagogy at the
            University of Colorado Boulder, studying under Professor Harumi
            Rhodes, Miller is excited to bring his love of music back to
            Minnesota. His undergraduate studies took place at Concordia College
            in Moorhead, Minnesota, where Miller studied with Dr. Sonja Harasim.
            During this time, Miller became deeply involved in the music making
            of the Fargo-Moorhead Community through both performance and
            education. He has appeared as a substitute in the Fargo-Moorhead
            Symphony for three years and is a founding member of the Campanile
            String Quartet. Miller has also taught at the Trollwood Performing
            Arts school for two years, was one of the first teachers involved
            with the Concordia String Preparatory program, taught as a string
            mentor for the North Star Chamber Music Festival’s first year, and
            has led his private students to winning local competitions and
            obtaining scholarships to their dream schools. In Colorado, Mr.
            Miller performed as a violinist in the Campanile String Quartet,
            Boulder Symphony, Longmont Symphony Orchestra, and has participated
            in the Crested Butte Music Festival for two years. Miller is very
            excited to teach in his own private studio and continue performing
            in the Twin Cities.
          </p>
          <div style={{ padding: '0px 30px 30px' }}>
            <a
              href={require('../../assets/Michael Miller Music Resume 2021.pdf')}
            >
              <Button icon={<DownOutlined />} type="primary">
                Mr. Miller's Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
