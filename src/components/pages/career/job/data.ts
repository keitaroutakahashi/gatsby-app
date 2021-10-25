export type Job = {
  title: string
  titleEn: string
  contents: {
    title: string
    text: string
  }[]
}

const data = [
  {
    title: "エンジニア",
    titleEn: "ENGINEER",
    contents: [
      {
        title: "業務",
        text: "社内案件のシステム改修及び運用・保守業務コーポレートサイトの作成・改修",
      },
      {
        title: "歓迎する経験",
        text: "Webアプリケーションの開発経験、フレームワークの知見、使用経験 Java / PHP / JavaScript / C# / Python / Ruby Linux / UNIXの経験・知識",
      },
      {
        title: "採用形態",
        text: "正社員（試用期間あり）<br />※未経験の方は契約社員からのスタートとなります。",
      },
      {
        title: "給与",
        text: "スキルや経験に応じて決定　※交通費は全額支給<br />※未経験の方は20万円、交通費は2万円まで支給",
      },
      {
        title: "勤務地",
        text: "東京都内 or FunMeetsオフィス(渋谷)",
      },
      {
        title: "勤務時間",
        text: "9:00～18:00 お昼休憩1h（プロジェクトにより変動）",
      },
      {
        title: "休日",
        text: "土日祝日、年末年始休暇、有給休暇、特別休暇(産休、育休、結婚など)",
      },
      {
        title: "社会保険",
        text: "健康保険、 厚生年金、雇用保険完備",
      },
      {
        title: "福利厚生",
        text: "年１回の決算賞与、リモートワーク時の通信費補助制度、バースデー休暇制度",
      },
      {
        title: "採用ページ",
        text: "<a href='' target='_blank' rel='noopener noreferrer' class='underline font-bold'>Wantedly</a>",
      },
    ],
  },
  {
    title: "クリエイター（webデザイナー）",
    titleEn: "CREATER",
    contents: [
      {
        title: "業務",
        text: "社内案件のディレクション・マーケティング・デザイン業務<br />コーポレートサイト/LP、バナーの作成・改修<br />その他クリエイティブ業務全般",
      },
      {
        title: "歓迎する経験",
        text: "Webサイト/LP制作、バナー作成、UI/UXデザイン、 Web制作のディレクション経験、 マーケティング経験 (DBM/SEMなど)<br />フロントエンドエンジニア：設計 / コーディング / JavaScript デザインツール：Illustlater / Photoshop / Figma",
      },
      {
        title: "採用形態",
        text: "正社員（試用期間あり）<br />※未経験の方は契約社員からのスタートとなります。",
      },
      {
        title: "給与",
        text: "スキルや経験に応じて決定　※交通費は全額支給<br />※未経験の方は20万円、交通費は2万円まで支給",
      },
      {
        title: "勤務地",
        text: "東京都内 or FunMeetsオフィス(渋谷)",
      },
      {
        title: "勤務時間",
        text: "9:00～18:00 お昼休憩1h（プロジェクトにより変動）",
      },
      {
        title: "休日",
        text: "土日祝日、年末年始休暇、有給休暇、特別休暇(産休、育休、結婚など)",
      },
      {
        title: "社会保険",
        text: "健康保険、 厚生年金、雇用保険完備",
      },
      {
        title: "福利厚生",
        text: "年１回の決算賞与、リモートワーク時の通信費補助制度、バースデー休暇制度",
      },
      {
        title: "採用ページ",
        text: "<a href='' target='_blank' rel='noopener noreferrer' class='underline font-bold'>Wantedly</a>",
      },
    ],
  },
]

export default data
