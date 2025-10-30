// CISSP 8ドメインの問題データ
const questionBank = {
    "セキュリティとリスクマネジメント": [
        {
            question: "CIAトライアドに含まれない要素はどれですか？",
            options: [
                "機密性（Confidentiality）",
                "完全性（Integrity）",
                "可用性（Availability）",
                "否認防止（Non-repudiation）"
            ],
            correctAnswer: 3,
            explanation: "CIAトライアドは機密性、完全性、可用性の3要素で構成されます。否認防止は別のセキュリティ概念です。"
        },
        {
            question: "リスク対応戦略として適切でないものはどれですか？",
            options: [
                "リスクの回避",
                "リスクの軽減",
                "リスクの転嫁",
                "リスクの無視"
            ],
            correctAnswer: 3,
            explanation: "リスク対応戦略には回避、軽減、転嫁、受容があります。「無視」は適切なリスク対応戦略ではありません。"
        },
        {
            question: "デューディリジェンス（Due Diligence）とは何ですか？",
            options: [
                "セキュリティポリシーの作成",
                "適切な注意義務を払うこと",
                "リスクアセスメントの実施",
                "インシデント対応計画の策定"
            ],
            correctAnswer: 1,
            explanation: "デューディリジェンスは、組織が適切な注意義務を払い、合理的な予防措置を講じることを意味します。"
        }
    ],
    "資産のセキュリティ": [
        {
            question: "データの分類レベルとして一般的でないものはどれですか？",
            options: [
                "Top Secret（最高機密）",
                "Secret（機密）",
                "Confidential（秘密）",
                "Personal（個人）"
            ],
            correctAnswer: 3,
            explanation: "政府の分類では Top Secret、Secret、Confidential が使用されます。Personal は標準的な分類レベルではありません。"
        },
        {
            question: "データライフサイクルの最終段階は何ですか？",
            options: [
                "アーカイブ",
                "廃棄",
                "バックアップ",
                "暗号化"
            ],
            correctAnswer: 1,
            explanation: "データライフサイクルの最終段階は廃棄（Disposal/Destruction）です。適切な廃棄により情報漏洩を防ぎます。"
        },
        {
            question: "データ所有者（Data Owner）の主な責任はどれですか？",
            options: [
                "日常的なデータバックアップ",
                "データの分類とアクセス権限の承認",
                "サーバーのメンテナンス",
                "アプリケーションの開発"
            ],
            correctAnswer: 1,
            explanation: "データ所有者は、データの分類、アクセス権限の承認、保護要件の定義などに責任を持ちます。"
        }
    ],
    "セキュリティアーキテクチャとエンジニアリング": [
        {
            question: "ベル・ラパデュラモデル（Bell-LaPadula Model）が主に保護するのはどれですか？",
            options: [
                "可用性",
                "機密性",
                "完全性",
                "否認防止"
            ],
            correctAnswer: 1,
            explanation: "ベル・ラパデュラモデルは機密性を重視したアクセス制御モデルで、「no read up, no write down」のルールが特徴です。"
        },
        {
            question: "セキュアブート（Secure Boot）の目的は何ですか？",
            options: [
                "起動時間の短縮",
                "不正なソフトウェアの実行防止",
                "ハードディスクの暗号化",
                "ネットワーク接続の保護"
            ],
            correctAnswer: 1,
            explanation: "セキュアブートは、システム起動時に信頼されたソフトウェアのみが実行されることを保証する仕組みです。"
        },
        {
            question: "セキュリティカーネル（Security Kernel）とは何ですか？",
            options: [
                "ファイアウォールのコア機能",
                "参照モニターの概念を実装したもの",
                "暗号化アルゴリズム",
                "ウイルス対策ソフトウェア"
            ],
            correctAnswer: 1,
            explanation: "セキュリティカーネルは、参照モニターの概念を実装したハードウェア、ファームウェア、ソフトウェアの組み合わせです。"
        }
    ],
    "通信とネットワークセキュリティ": [
        {
            question: "OSI参照モデルで暗号化が行われる層として最も適切なのはどれですか？",
            options: [
                "物理層",
                "データリンク層",
                "ネットワーク層",
                "複数の層で可能"
            ],
            correctAnswer: 3,
            explanation: "暗号化は複数の層で実装可能です。例：データリンク層（MACsec）、ネットワーク層（IPsec）、トランスポート層（TLS）、アプリケーション層（PGP）。"
        },
        {
            question: "IPsecで使用されるプロトコルとして正しくないものはどれですか？",
            options: [
                "AH（Authentication Header）",
                "ESP（Encapsulating Security Payload）",
                "IKE（Internet Key Exchange）",
                "SSL（Secure Sockets Layer）"
            ],
            correctAnswer: 3,
            explanation: "IPsecではAH、ESP、IKEが使用されます。SSLはトランスポート層のプロトコルでIPsecとは別のものです。"
        },
        {
            question: "ステートフルファイアウォールの特徴はどれですか？",
            options: [
                "パケットヘッダーのみを検査",
                "接続状態を追跡して判断",
                "アプリケーション層の内容を検査",
                "物理層でフィルタリング"
            ],
            correctAnswer: 1,
            explanation: "ステートフルファイアウォールは接続の状態（ステート）を追跡し、確立された接続のコンテキストに基づいてパケットをフィルタリングします。"
        }
    ],
    "アイデンティティとアクセス管理": [
        {
            question: "認証の3要素に含まれないものはどれですか？",
            options: [
                "知識要素（Something you know）",
                "所有要素（Something you have）",
                "生体要素（Something you are）",
                "場所要素（Somewhere you are）"
            ],
            correctAnswer: 3,
            explanation: "伝統的な認証の3要素は、知識要素、所有要素、生体要素です。場所要素は補助的な要素として使用されることがあります。"
        },
        {
            question: "RBAC（Role-Based Access Control）の主な利点はどれですか？",
            options: [
                "個別のユーザーごとに権限を設定できる",
                "役割に基づいて権限を管理できる",
                "時間に基づいてアクセスを制御できる",
                "場所に基づいてアクセスを制御できる"
            ],
            correctAnswer: 1,
            explanation: "RBACは役割（Role）に基づいてアクセス権限を管理し、ユーザーには役割を割り当てることで権限管理を簡素化します。"
        },
        {
            question: "シングルサインオン（SSO）の主なリスクはどれですか？",
            options: [
                "パスワードの複雑さが増す",
                "認証プロセスが複雑になる",
                "1つの認証情報が侵害されると複数のシステムにアクセスされる",
                "ユーザーの利便性が低下する"
            ],
            correctAnswer: 2,
            explanation: "SSOでは1つの認証情報で複数のシステムにアクセスできるため、その認証情報が侵害されると複数のシステムが危険にさらされます。"
        }
    ],
    "セキュリティ評価とテスト": [
        {
            question: "ペネトレーションテストの種類として適切でないものはどれですか？",
            options: [
                "ブラックボックステスト",
                "ホワイトボックステスト",
                "グレーボックステスト",
                "レッドボックステスト"
            ],
            correctAnswer: 3,
            explanation: "ペネトレーションテストには、ブラックボックス、ホワイトボックス、グレーボックスの3種類があります。レッドボックスは標準的な分類ではありません。"
        },
        {
            question: "脆弱性スキャンとペネトレーションテストの主な違いは何ですか？",
            options: [
                "コストの違い",
                "実施頻度の違い",
                "脆弱性の発見 vs 実際の悪用",
                "使用するツールの違い"
            ],
            correctAnswer: 2,
            explanation: "脆弱性スキャンは潜在的な脆弱性を特定するのに対し、ペネトレーションテストは脆弱性を実際に悪用してシステムへの侵入を試みます。"
        },
        {
            question: "コードレビューを実施する最も適切なタイミングはいつですか？",
            options: [
                "開発完了後",
                "本番環境へのリリース後",
                "開発プロセス全体を通して",
                "脆弱性が発見されたとき"
            ],
            correctAnswer: 2,
            explanation: "コードレビューは開発プロセス全体を通して実施することで、早期に問題を発見し、修正コストを削減できます。"
        }
    ],
    "セキュリティ運用": [
        {
            question: "インシデント対応の最初のステップはどれですか？",
            options: [
                "根絶（Eradication）",
                "検知と分析（Detection and Analysis）",
                "復旧（Recovery）",
                "事後レビュー（Post-Incident Review）"
            ],
            correctAnswer: 1,
            explanation: "インシデント対応プロセスは、準備、検知と分析、封じ込め、根絶、復旧、事後レビューの順で進みます。検知と分析が実質的な最初のステップです。"
        },
        {
            question: "変更管理（Change Management）の主な目的はどれですか？",
            options: [
                "変更を迅速に実施する",
                "変更によるリスクを最小化し、承認プロセスを確保する",
                "コストを削減する",
                "ユーザーの要求を全て受け入れる"
            ],
            correctAnswer: 1,
            explanation: "変更管理の主な目的は、変更によるリスクを最小化し、適切な承認とテストプロセスを経て変更を実施することです。"
        },
        {
            question: "バックアップの「3-2-1ルール」とは何ですか？",
            options: [
                "3日に1回バックアップを取る",
                "3つのコピー、2種類のメディア、1つはオフサイト",
                "3台のサーバー、2つのデータセンター、1つのクラウド",
                "3年間保管、2年間アーカイブ、1年間削除"
            ],
            correctAnswer: 1,
            explanation: "3-2-1ルールは、データのコピーを3つ作成し、2種類の異なるメディアに保存し、1つはオフサイトに保管することを推奨します。"
        }
    ],
    "ソフトウェア開発セキュリティ": [
        {
            question: "SQLインジェクション攻撃を防ぐ最も効果的な方法はどれですか？",
            options: [
                "入力値の長さを制限する",
                "プリペアドステートメントを使用する",
                "エラーメッセージを非表示にする",
                "管理者権限でデータベースにアクセスする"
            ],
            correctAnswer: 1,
            explanation: "プリペアドステートメント（パラメータ化クエリ）を使用することで、SQLインジェクション攻撃を効果的に防ぐことができます。"
        },
        {
            question: "SDLC（Software Development Life Cycle）のどの段階でセキュリティを考慮すべきですか？",
            options: [
                "設計段階のみ",
                "テスト段階のみ",
                "全ての段階",
                "リリース後"
            ],
            correctAnswer: 2,
            explanation: "セキュリティはSDLCの全ての段階で考慮すべきです。これを「セキュリティバイデザイン」または「シフトレフト」アプローチと呼びます。"
        },
        {
            question: "OWASP Top 10の主な目的は何ですか？",
            options: [
                "セキュリティツールのランキング",
                "Webアプリケーションの重大な脆弱性の認識向上",
                "プログラミング言語の評価",
                "セキュリティ専門家の認定"
            ],
            correctAnswer: 1,
            explanation: "OWASP Top 10は、Webアプリケーションにおける最も重大なセキュリティリスクを認識し、対策を促進することを目的としています。"
        }
    ]
};

// 問題データをエクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
