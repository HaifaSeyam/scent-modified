import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css"

class ArabicAbout extends Component {

  render() {
    return (
      <Wrapper >
          <h1 className="sectionHeader">متعة التجربة</h1>
        <Container className="about">
          <Row>
            <Col>
              <Card bg="light" style={{ width: '100%' }} className="text-left">
                <Card.Header>أحسن الاختيار</Card.Header>
                <Card.Body>
                  <Card.Title>ابحث عن عطرك</Card.Title>
                  <Card.Text>
                    مع أريج يمكنك الحصول على عينة كل 30 يوم للاستمتاع بعطرك المفضل دون الحاجة لهدر مزيدا من النقود. هل أحببت الفكرة؟ أضف العطر إلى مفضلتك
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="light" style={{ width: '100%', borderRadius: "50% 20% / 10% 40%" }} className="text-center">
                
                <Card.Body>
                  <Card.Title>عطرك</Card.Title>
                  <Card.Text>
                    أغلب الأحيان يغامر الأشخاص بشراء عطر قد لايعجبهم لاحقا. مع أريج يمكنك تجربة العطر قبل شراؤه بمبلغ أكبر.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="light" style={{ width: '100%' }} className="text-left">
                <Card.Header>لا زلت غير متأكد؟</Card.Header>
                <Card.Body>
                  <Card.Title>أترك الاختيار لنا!</Card.Title>
                  <Card.Text>
                    نحن الآن بصدد تطوير أنواع أخرى من العطور بنكهات جديدة من الخشب والزهور حيث بمكنك اختيار عطر لكل مناسبة.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default ArabicAbout;