import * as $protobuf from "protobufjs";
import { Long } from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Properties of an AppVersion. */
    interface IAppVersion {

        /** AppVersion primary */
        primary?: (number|null);

        /** AppVersion secondary */
        secondary?: (number|null);

        /** AppVersion tertiary */
        tertiary?: (number|null);

        /** AppVersion quaternary */
        quaternary?: (number|null);

        /** AppVersion quinary */
        quinary?: (number|null);
    }

    /** Represents an AppVersion. */
    class AppVersion implements IAppVersion {

        /**
         * Constructs a new AppVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppVersion);

        /** AppVersion primary. */
        public primary: number;

        /** AppVersion secondary. */
        public secondary: number;

        /** AppVersion tertiary. */
        public tertiary: number;

        /** AppVersion quaternary. */
        public quaternary: number;

        /** AppVersion quinary. */
        public quinary: number;

        /**
         * Creates a new AppVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppVersion instance
         */
        public static create(properties?: proto.IAppVersion): proto.AppVersion;

        /**
         * Encodes the specified AppVersion message. Does not implicitly {@link proto.AppVersion.verify|verify} messages.
         * @param message AppVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link proto.AppVersion.verify|verify} messages.
         * @param message AppVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppVersion;

        /**
         * Decodes an AppVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppVersion;

        /**
         * Verifies an AppVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppVersion
         */
        public static fromObject(object: { [k: string]: any }): proto.AppVersion;

        /**
         * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
         * @param message AppVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserAgent. */
    interface IUserAgent {

        /** UserAgent platform */
        platform?: (proto.UserAgent.UserAgentPlatform|null);

        /** UserAgent appVersion */
        appVersion?: (proto.IAppVersion|null);

        /** UserAgent mcc */
        mcc?: (string|null);

        /** UserAgent mnc */
        mnc?: (string|null);

        /** UserAgent osVersion */
        osVersion?: (string|null);

        /** UserAgent manufacturer */
        manufacturer?: (string|null);

        /** UserAgent device */
        device?: (string|null);

        /** UserAgent osBuildNumber */
        osBuildNumber?: (string|null);

        /** UserAgent phoneId */
        phoneId?: (string|null);

        /** UserAgent releaseChannel */
        releaseChannel?: (proto.UserAgent.UserAgentReleaseChannel|null);

        /** UserAgent localeLanguageIso6391 */
        localeLanguageIso6391?: (string|null);

        /** UserAgent localeCountryIso31661Alpha2 */
        localeCountryIso31661Alpha2?: (string|null);

        /** UserAgent deviceBoard */
        deviceBoard?: (string|null);
    }

    /** Represents a UserAgent. */
    class UserAgent implements IUserAgent {

        /**
         * Constructs a new UserAgent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUserAgent);

        /** UserAgent platform. */
        public platform: proto.UserAgent.UserAgentPlatform;

        /** UserAgent appVersion. */
        public appVersion?: (proto.IAppVersion|null);

        /** UserAgent mcc. */
        public mcc: string;

        /** UserAgent mnc. */
        public mnc: string;

        /** UserAgent osVersion. */
        public osVersion: string;

        /** UserAgent manufacturer. */
        public manufacturer: string;

        /** UserAgent device. */
        public device: string;

        /** UserAgent osBuildNumber. */
        public osBuildNumber: string;

        /** UserAgent phoneId. */
        public phoneId: string;

        /** UserAgent releaseChannel. */
        public releaseChannel: proto.UserAgent.UserAgentReleaseChannel;

        /** UserAgent localeLanguageIso6391. */
        public localeLanguageIso6391: string;

        /** UserAgent localeCountryIso31661Alpha2. */
        public localeCountryIso31661Alpha2: string;

        /** UserAgent deviceBoard. */
        public deviceBoard: string;

        /**
         * Creates a new UserAgent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserAgent instance
         */
        public static create(properties?: proto.IUserAgent): proto.UserAgent;

        /**
         * Encodes the specified UserAgent message. Does not implicitly {@link proto.UserAgent.verify|verify} messages.
         * @param message UserAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link proto.UserAgent.verify|verify} messages.
         * @param message UserAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserAgent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserAgent;

        /**
         * Decodes a UserAgent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserAgent;

        /**
         * Verifies a UserAgent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserAgent
         */
        public static fromObject(object: { [k: string]: any }): proto.UserAgent;

        /**
         * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
         * @param message UserAgent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserAgent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace UserAgent {

        /** UserAgentPlatform enum. */
        enum UserAgentPlatform {
            ANDROID = 0,
            IOS = 1,
            WINDOWS_PHONE = 2,
            BLACKBERRY = 3,
            BLACKBERRYX = 4,
            S40 = 5,
            S60 = 6,
            PYTHON_CLIENT = 7,
            TIZEN = 8,
            ENTERPRISE = 9,
            SMB_ANDROID = 10,
            KAIOS = 11,
            SMB_IOS = 12,
            WINDOWS = 13,
            WEB = 14,
            PORTAL = 15,
            GREEN_ANDROID = 16,
            GREEN_IPHONE = 17,
            BLUE_ANDROID = 18,
            BLUE_IPHONE = 19,
            FBLITE_ANDROID = 20,
            MLITE_ANDROID = 21,
            IGLITE_ANDROID = 22,
            PAGE = 23,
            MACOS = 24,
            VR = 25
        }

        /** UserAgentReleaseChannel enum. */
        enum UserAgentReleaseChannel {
            RELEASE = 0,
            BETA = 1,
            ALPHA = 2,
            DEBUG = 3
        }
    }

    /** Properties of a WebdPayload. */
    interface IWebdPayload {

        /** WebdPayload usesParticipantInKey */
        usesParticipantInKey?: (boolean|null);

        /** WebdPayload supportsStarredMessages */
        supportsStarredMessages?: (boolean|null);

        /** WebdPayload supportsDocumentMessages */
        supportsDocumentMessages?: (boolean|null);

        /** WebdPayload supportsUrlMessages */
        supportsUrlMessages?: (boolean|null);

        /** WebdPayload supportsMediaRetry */
        supportsMediaRetry?: (boolean|null);

        /** WebdPayload supportsE2EImage */
        supportsE2EImage?: (boolean|null);

        /** WebdPayload supportsE2EVideo */
        supportsE2EVideo?: (boolean|null);

        /** WebdPayload supportsE2EAudio */
        supportsE2EAudio?: (boolean|null);

        /** WebdPayload supportsE2EDocument */
        supportsE2EDocument?: (boolean|null);

        /** WebdPayload documentTypes */
        documentTypes?: (string|null);

        /** WebdPayload features */
        features?: (Uint8Array|null);
    }

    /** Represents a WebdPayload. */
    class WebdPayload implements IWebdPayload {

        /**
         * Constructs a new WebdPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IWebdPayload);

        /** WebdPayload usesParticipantInKey. */
        public usesParticipantInKey: boolean;

        /** WebdPayload supportsStarredMessages. */
        public supportsStarredMessages: boolean;

        /** WebdPayload supportsDocumentMessages. */
        public supportsDocumentMessages: boolean;

        /** WebdPayload supportsUrlMessages. */
        public supportsUrlMessages: boolean;

        /** WebdPayload supportsMediaRetry. */
        public supportsMediaRetry: boolean;

        /** WebdPayload supportsE2EImage. */
        public supportsE2EImage: boolean;

        /** WebdPayload supportsE2EVideo. */
        public supportsE2EVideo: boolean;

        /** WebdPayload supportsE2EAudio. */
        public supportsE2EAudio: boolean;

        /** WebdPayload supportsE2EDocument. */
        public supportsE2EDocument: boolean;

        /** WebdPayload documentTypes. */
        public documentTypes: string;

        /** WebdPayload features. */
        public features: Uint8Array;

        /**
         * Creates a new WebdPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebdPayload instance
         */
        public static create(properties?: proto.IWebdPayload): proto.WebdPayload;

        /**
         * Encodes the specified WebdPayload message. Does not implicitly {@link proto.WebdPayload.verify|verify} messages.
         * @param message WebdPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IWebdPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link proto.WebdPayload.verify|verify} messages.
         * @param message WebdPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IWebdPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebdPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebdPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WebdPayload;

        /**
         * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebdPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WebdPayload;

        /**
         * Verifies a WebdPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebdPayload
         */
        public static fromObject(object: { [k: string]: any }): proto.WebdPayload;

        /**
         * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
         * @param message WebdPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.WebdPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebdPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WebInfo. */
    interface IWebInfo {

        /** WebInfo refToken */
        refToken?: (string|null);

        /** WebInfo version */
        version?: (string|null);

        /** WebInfo webdPayload */
        webdPayload?: (proto.IWebdPayload|null);

        /** WebInfo webSubPlatform */
        webSubPlatform?: (proto.WebInfo.WebInfoWebSubPlatform|null);
    }

    /** Represents a WebInfo. */
    class WebInfo implements IWebInfo {

        /**
         * Constructs a new WebInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IWebInfo);

        /** WebInfo refToken. */
        public refToken: string;

        /** WebInfo version. */
        public version: string;

        /** WebInfo webdPayload. */
        public webdPayload?: (proto.IWebdPayload|null);

        /** WebInfo webSubPlatform. */
        public webSubPlatform: proto.WebInfo.WebInfoWebSubPlatform;

        /**
         * Creates a new WebInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebInfo instance
         */
        public static create(properties?: proto.IWebInfo): proto.WebInfo;

        /**
         * Encodes the specified WebInfo message. Does not implicitly {@link proto.WebInfo.verify|verify} messages.
         * @param message WebInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IWebInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link proto.WebInfo.verify|verify} messages.
         * @param message WebInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IWebInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WebInfo;

        /**
         * Decodes a WebInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WebInfo;

        /**
         * Verifies a WebInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.WebInfo;

        /**
         * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
         * @param message WebInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.WebInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace WebInfo {

        /** WebInfoWebSubPlatform enum. */
        enum WebInfoWebSubPlatform {
            WEB_BROWSER = 0,
            APP_STORE = 1,
            WIN_STORE = 2,
            DARWIN = 3,
            WIN32 = 4
        }
    }

    /** Properties of a DNSSource. */
    interface IDNSSource {

        /** DNSSource dnsMethod */
        dnsMethod?: (proto.DNSSource.DNSSourceDNSResolutionMethod|null);

        /** DNSSource appCached */
        appCached?: (boolean|null);
    }

    /** Represents a DNSSource. */
    class DNSSource implements IDNSSource {

        /**
         * Constructs a new DNSSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDNSSource);

        /** DNSSource dnsMethod. */
        public dnsMethod: proto.DNSSource.DNSSourceDNSResolutionMethod;

        /** DNSSource appCached. */
        public appCached: boolean;

        /**
         * Creates a new DNSSource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DNSSource instance
         */
        public static create(properties?: proto.IDNSSource): proto.DNSSource;

        /**
         * Encodes the specified DNSSource message. Does not implicitly {@link proto.DNSSource.verify|verify} messages.
         * @param message DNSSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDNSSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DNSSource message, length delimited. Does not implicitly {@link proto.DNSSource.verify|verify} messages.
         * @param message DNSSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDNSSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DNSSource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DNSSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DNSSource;

        /**
         * Decodes a DNSSource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DNSSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DNSSource;

        /**
         * Verifies a DNSSource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DNSSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DNSSource
         */
        public static fromObject(object: { [k: string]: any }): proto.DNSSource;

        /**
         * Creates a plain object from a DNSSource message. Also converts values to other types if specified.
         * @param message DNSSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DNSSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DNSSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DNSSource {

        /** DNSSourceDNSResolutionMethod enum. */
        enum DNSSourceDNSResolutionMethod {
            SYSTEM = 0,
            GOOGLE = 1,
            HARDCODED = 2,
            OVERRIDE = 3,
            FALLBACK = 4
        }
    }

    /** Properties of a CompanionRegData. */
    interface ICompanionRegData {

        /** CompanionRegData eRegid */
        eRegid?: (Uint8Array|null);

        /** CompanionRegData eKeytype */
        eKeytype?: (Uint8Array|null);

        /** CompanionRegData eIdent */
        eIdent?: (Uint8Array|null);

        /** CompanionRegData eSkeyId */
        eSkeyId?: (Uint8Array|null);

        /** CompanionRegData eSkeyVal */
        eSkeyVal?: (Uint8Array|null);

        /** CompanionRegData eSkeySig */
        eSkeySig?: (Uint8Array|null);

        /** CompanionRegData buildHash */
        buildHash?: (Uint8Array|null);

        /** CompanionRegData companionProps */
        companionProps?: (Uint8Array|null);
    }

    /** Represents a CompanionRegData. */
    class CompanionRegData implements ICompanionRegData {

        /**
         * Constructs a new CompanionRegData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICompanionRegData);

        /** CompanionRegData eRegid. */
        public eRegid: Uint8Array;

        /** CompanionRegData eKeytype. */
        public eKeytype: Uint8Array;

        /** CompanionRegData eIdent. */
        public eIdent: Uint8Array;

        /** CompanionRegData eSkeyId. */
        public eSkeyId: Uint8Array;

        /** CompanionRegData eSkeyVal. */
        public eSkeyVal: Uint8Array;

        /** CompanionRegData eSkeySig. */
        public eSkeySig: Uint8Array;

        /** CompanionRegData buildHash. */
        public buildHash: Uint8Array;

        /** CompanionRegData companionProps. */
        public companionProps: Uint8Array;

        /**
         * Creates a new CompanionRegData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompanionRegData instance
         */
        public static create(properties?: proto.ICompanionRegData): proto.CompanionRegData;

        /**
         * Encodes the specified CompanionRegData message. Does not implicitly {@link proto.CompanionRegData.verify|verify} messages.
         * @param message CompanionRegData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICompanionRegData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompanionRegData message, length delimited. Does not implicitly {@link proto.CompanionRegData.verify|verify} messages.
         * @param message CompanionRegData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICompanionRegData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompanionRegData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompanionRegData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CompanionRegData;

        /**
         * Decodes a CompanionRegData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompanionRegData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CompanionRegData;

        /**
         * Verifies a CompanionRegData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompanionRegData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompanionRegData
         */
        public static fromObject(object: { [k: string]: any }): proto.CompanionRegData;

        /**
         * Creates a plain object from a CompanionRegData message. Also converts values to other types if specified.
         * @param message CompanionRegData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CompanionRegData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompanionRegData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientPayload. */
    interface IClientPayload {

        /** ClientPayload username */
        username?: (number|Long|null);

        /** ClientPayload passive */
        passive?: (boolean|null);

        /** ClientPayload clientFeatures */
        clientFeatures?: (proto.ClientPayload.ClientPayloadClientFeature[]|null);

        /** ClientPayload userAgent */
        userAgent?: (proto.IUserAgent|null);

        /** ClientPayload webInfo */
        webInfo?: (proto.IWebInfo|null);

        /** ClientPayload pushName */
        pushName?: (string|null);

        /** ClientPayload sessionId */
        sessionId?: (number|null);

        /** ClientPayload shortConnect */
        shortConnect?: (boolean|null);

        /** ClientPayload iosAppExtension */
        iosAppExtension?: (proto.ClientPayload.ClientPayloadIOSAppExtension|null);

        /** ClientPayload connectType */
        connectType?: (proto.ClientPayload.ClientPayloadConnectType|null);

        /** ClientPayload connectReason */
        connectReason?: (proto.ClientPayload.ClientPayloadConnectReason|null);

        /** ClientPayload shards */
        shards?: (number[]|null);

        /** ClientPayload dnsSource */
        dnsSource?: (proto.IDNSSource|null);

        /** ClientPayload connectAttemptCount */
        connectAttemptCount?: (number|null);

        /** ClientPayload agent */
        agent?: (number|null);

        /** ClientPayload device */
        device?: (number|null);

        /** ClientPayload regData */
        regData?: (proto.ICompanionRegData|null);

        /** ClientPayload product */
        product?: (proto.ClientPayload.ClientPayloadProduct|null);

        /** ClientPayload fbCat */
        fbCat?: (Uint8Array|null);

        /** ClientPayload fbUserAgent */
        fbUserAgent?: (Uint8Array|null);

        /** ClientPayload oc */
        oc?: (boolean|null);
    }

    /** Represents a ClientPayload. */
    class ClientPayload implements IClientPayload {

        /**
         * Constructs a new ClientPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IClientPayload);

        /** ClientPayload username. */
        public username: (number|Long);

        /** ClientPayload passive. */
        public passive: boolean;

        /** ClientPayload clientFeatures. */
        public clientFeatures: proto.ClientPayload.ClientPayloadClientFeature[];

        /** ClientPayload userAgent. */
        public userAgent?: (proto.IUserAgent|null);

        /** ClientPayload webInfo. */
        public webInfo?: (proto.IWebInfo|null);

        /** ClientPayload pushName. */
        public pushName: string;

        /** ClientPayload sessionId. */
        public sessionId: number;

        /** ClientPayload shortConnect. */
        public shortConnect: boolean;

        /** ClientPayload iosAppExtension. */
        public iosAppExtension: proto.ClientPayload.ClientPayloadIOSAppExtension;

        /** ClientPayload connectType. */
        public connectType: proto.ClientPayload.ClientPayloadConnectType;

        /** ClientPayload connectReason. */
        public connectReason: proto.ClientPayload.ClientPayloadConnectReason;

        /** ClientPayload shards. */
        public shards: number[];

        /** ClientPayload dnsSource. */
        public dnsSource?: (proto.IDNSSource|null);

        /** ClientPayload connectAttemptCount. */
        public connectAttemptCount: number;

        /** ClientPayload agent. */
        public agent: number;

        /** ClientPayload device. */
        public device: number;

        /** ClientPayload regData. */
        public regData?: (proto.ICompanionRegData|null);

        /** ClientPayload product. */
        public product: proto.ClientPayload.ClientPayloadProduct;

        /** ClientPayload fbCat. */
        public fbCat: Uint8Array;

        /** ClientPayload fbUserAgent. */
        public fbUserAgent: Uint8Array;

        /** ClientPayload oc. */
        public oc: boolean;

        /**
         * Creates a new ClientPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPayload instance
         */
        public static create(properties?: proto.IClientPayload): proto.ClientPayload;

        /**
         * Encodes the specified ClientPayload message. Does not implicitly {@link proto.ClientPayload.verify|verify} messages.
         * @param message ClientPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IClientPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientPayload message, length delimited. Does not implicitly {@link proto.ClientPayload.verify|verify} messages.
         * @param message ClientPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IClientPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ClientPayload;

        /**
         * Decodes a ClientPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ClientPayload;

        /**
         * Verifies a ClientPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPayload
         */
        public static fromObject(object: { [k: string]: any }): proto.ClientPayload;

        /**
         * Creates a plain object from a ClientPayload message. Also converts values to other types if specified.
         * @param message ClientPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ClientPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ClientPayload {

        /** ClientPayloadClientFeature enum. */
        enum ClientPayloadClientFeature {
            NONE = 0
        }

        /** ClientPayloadIOSAppExtension enum. */
        enum ClientPayloadIOSAppExtension {
            SHARE_EXTENSION = 0,
            SERVICE_EXTENSION = 1,
            INTENTS_EXTENSION = 2
        }

        /** ClientPayloadConnectType enum. */
        enum ClientPayloadConnectType {
            CELLULAR_UNKNOWN = 0,
            WIFI_UNKNOWN = 1,
            CELLULAR_EDGE = 100,
            CELLULAR_IDEN = 101,
            CELLULAR_UMTS = 102,
            CELLULAR_EVDO = 103,
            CELLULAR_GPRS = 104,
            CELLULAR_HSDPA = 105,
            CELLULAR_HSUPA = 106,
            CELLULAR_HSPA = 107,
            CELLULAR_CDMA = 108,
            CELLULAR_1XRTT = 109,
            CELLULAR_EHRPD = 110,
            CELLULAR_LTE = 111,
            CELLULAR_HSPAP = 112
        }

        /** ClientPayloadConnectReason enum. */
        enum ClientPayloadConnectReason {
            PUSH = 0,
            USER_ACTIVATED = 1,
            SCHEDULED = 2,
            ERROR_RECONNECT = 3,
            NETWORK_SWITCH = 4,
            PING_RECONNECT = 5
        }

        /** ClientPayloadProduct enum. */
        enum ClientPayloadProduct {
            WHATSAPP = 0,
            MESSENGER = 1
        }
    }

    /** Properties of a NoiseCertificate. */
    interface INoiseCertificate {

        /** NoiseCertificate details */
        details?: (Uint8Array|null);

        /** NoiseCertificate signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a NoiseCertificate. */
    class NoiseCertificate implements INoiseCertificate {

        /**
         * Constructs a new NoiseCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INoiseCertificate);

        /** NoiseCertificate details. */
        public details: Uint8Array;

        /** NoiseCertificate signature. */
        public signature: Uint8Array;

        /**
         * Creates a new NoiseCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoiseCertificate instance
         */
        public static create(properties?: proto.INoiseCertificate): proto.NoiseCertificate;

        /**
         * Encodes the specified NoiseCertificate message. Does not implicitly {@link proto.NoiseCertificate.verify|verify} messages.
         * @param message NoiseCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INoiseCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link proto.NoiseCertificate.verify|verify} messages.
         * @param message NoiseCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INoiseCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NoiseCertificate;

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NoiseCertificate;

        /**
         * Verifies a NoiseCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoiseCertificate
         */
        public static fromObject(object: { [k: string]: any }): proto.NoiseCertificate;

        /**
         * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
         * @param message NoiseCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NoiseCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoiseCertificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientHello. */
    interface IClientHello {

        /** ClientHello ephemeral */
        ephemeral?: (Uint8Array|null);

        /** ClientHello static */
        "static"?: (Uint8Array|null);

        /** ClientHello payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a ClientHello. */
    class ClientHello implements IClientHello {

        /**
         * Constructs a new ClientHello.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IClientHello);

        /** ClientHello ephemeral. */
        public ephemeral: Uint8Array;

        /** ClientHello static. */
        public static: Uint8Array;

        /** ClientHello payload. */
        public payload: Uint8Array;

        /**
         * Creates a new ClientHello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientHello instance
         */
        public static create(properties?: proto.IClientHello): proto.ClientHello;

        /**
         * Encodes the specified ClientHello message. Does not implicitly {@link proto.ClientHello.verify|verify} messages.
         * @param message ClientHello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IClientHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link proto.ClientHello.verify|verify} messages.
         * @param message ClientHello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IClientHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientHello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ClientHello;

        /**
         * Decodes a ClientHello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ClientHello;

        /**
         * Verifies a ClientHello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientHello
         */
        public static fromObject(object: { [k: string]: any }): proto.ClientHello;

        /**
         * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
         * @param message ClientHello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ClientHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientHello to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerHello. */
    interface IServerHello {

        /** ServerHello ephemeral */
        ephemeral?: (Uint8Array|null);

        /** ServerHello static */
        "static"?: (Uint8Array|null);

        /** ServerHello payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a ServerHello. */
    class ServerHello implements IServerHello {

        /**
         * Constructs a new ServerHello.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServerHello);

        /** ServerHello ephemeral. */
        public ephemeral: Uint8Array;

        /** ServerHello static. */
        public static: Uint8Array;

        /** ServerHello payload. */
        public payload: Uint8Array;

        /**
         * Creates a new ServerHello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerHello instance
         */
        public static create(properties?: proto.IServerHello): proto.ServerHello;

        /**
         * Encodes the specified ServerHello message. Does not implicitly {@link proto.ServerHello.verify|verify} messages.
         * @param message ServerHello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServerHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link proto.ServerHello.verify|verify} messages.
         * @param message ServerHello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServerHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerHello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServerHello;

        /**
         * Decodes a ServerHello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServerHello;

        /**
         * Verifies a ServerHello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerHello
         */
        public static fromObject(object: { [k: string]: any }): proto.ServerHello;

        /**
         * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
         * @param message ServerHello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServerHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerHello to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientFinish. */
    interface IClientFinish {

        /** ClientFinish static */
        "static"?: (Uint8Array|null);

        /** ClientFinish payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a ClientFinish. */
    class ClientFinish implements IClientFinish {

        /**
         * Constructs a new ClientFinish.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IClientFinish);

        /** ClientFinish static. */
        public static: Uint8Array;

        /** ClientFinish payload. */
        public payload: Uint8Array;

        /**
         * Creates a new ClientFinish instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientFinish instance
         */
        public static create(properties?: proto.IClientFinish): proto.ClientFinish;

        /**
         * Encodes the specified ClientFinish message. Does not implicitly {@link proto.ClientFinish.verify|verify} messages.
         * @param message ClientFinish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IClientFinish, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link proto.ClientFinish.verify|verify} messages.
         * @param message ClientFinish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IClientFinish, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientFinish message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ClientFinish;

        /**
         * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientFinish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ClientFinish;

        /**
         * Verifies a ClientFinish message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientFinish
         */
        public static fromObject(object: { [k: string]: any }): proto.ClientFinish;

        /**
         * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
         * @param message ClientFinish
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ClientFinish, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientFinish to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HandshakeMessage. */
    interface IHandshakeMessage {

        /** HandshakeMessage clientHello */
        clientHello?: (proto.IClientHello|null);

        /** HandshakeMessage serverHello */
        serverHello?: (proto.IServerHello|null);

        /** HandshakeMessage clientFinish */
        clientFinish?: (proto.IClientFinish|null);
    }

    /** Represents a HandshakeMessage. */
    class HandshakeMessage implements IHandshakeMessage {

        /**
         * Constructs a new HandshakeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHandshakeMessage);

        /** HandshakeMessage clientHello. */
        public clientHello?: (proto.IClientHello|null);

        /** HandshakeMessage serverHello. */
        public serverHello?: (proto.IServerHello|null);

        /** HandshakeMessage clientFinish. */
        public clientFinish?: (proto.IClientFinish|null);

        /**
         * Creates a new HandshakeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandshakeMessage instance
         */
        public static create(properties?: proto.IHandshakeMessage): proto.HandshakeMessage;

        /**
         * Encodes the specified HandshakeMessage message. Does not implicitly {@link proto.HandshakeMessage.verify|verify} messages.
         * @param message HandshakeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHandshakeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link proto.HandshakeMessage.verify|verify} messages.
         * @param message HandshakeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHandshakeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HandshakeMessage;

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HandshakeMessage;

        /**
         * Verifies a HandshakeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandshakeMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.HandshakeMessage;

        /**
         * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
         * @param message HandshakeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HandshakeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandshakeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BizIdentityInfo. */
    interface IBizIdentityInfo {

        /** BizIdentityInfo vlevel */
        vlevel?: (proto.BizIdentityInfo.BizIdentityInfoVerifiedLevelValue|null);

        /** BizIdentityInfo vnameCert */
        vnameCert?: (proto.IVerifiedNameCertificate|null);

        /** BizIdentityInfo signed */
        signed?: (boolean|null);

        /** BizIdentityInfo revoked */
        revoked?: (boolean|null);

        /** BizIdentityInfo hostStorage */
        hostStorage?: (proto.BizIdentityInfo.BizIdentityInfoHostStorageType|null);

        /** BizIdentityInfo actualActors */
        actualActors?: (proto.BizIdentityInfo.BizIdentityInfoActualActorsType|null);

        /** BizIdentityInfo privacyModeTs */
        privacyModeTs?: (number|Long|null);
    }

    /** Represents a BizIdentityInfo. */
    class BizIdentityInfo implements IBizIdentityInfo {

        /**
         * Constructs a new BizIdentityInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IBizIdentityInfo);

        /** BizIdentityInfo vlevel. */
        public vlevel: proto.BizIdentityInfo.BizIdentityInfoVerifiedLevelValue;

        /** BizIdentityInfo vnameCert. */
        public vnameCert?: (proto.IVerifiedNameCertificate|null);

        /** BizIdentityInfo signed. */
        public signed: boolean;

        /** BizIdentityInfo revoked. */
        public revoked: boolean;

        /** BizIdentityInfo hostStorage. */
        public hostStorage: proto.BizIdentityInfo.BizIdentityInfoHostStorageType;

        /** BizIdentityInfo actualActors. */
        public actualActors: proto.BizIdentityInfo.BizIdentityInfoActualActorsType;

        /** BizIdentityInfo privacyModeTs. */
        public privacyModeTs: (number|Long);

        /**
         * Creates a new BizIdentityInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizIdentityInfo instance
         */
        public static create(properties?: proto.IBizIdentityInfo): proto.BizIdentityInfo;

        /**
         * Encodes the specified BizIdentityInfo message. Does not implicitly {@link proto.BizIdentityInfo.verify|verify} messages.
         * @param message BizIdentityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IBizIdentityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizIdentityInfo message, length delimited. Does not implicitly {@link proto.BizIdentityInfo.verify|verify} messages.
         * @param message BizIdentityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IBizIdentityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizIdentityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BizIdentityInfo;

        /**
         * Decodes a BizIdentityInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BizIdentityInfo;

        /**
         * Verifies a BizIdentityInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizIdentityInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizIdentityInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.BizIdentityInfo;

        /**
         * Creates a plain object from a BizIdentityInfo message. Also converts values to other types if specified.
         * @param message BizIdentityInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.BizIdentityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizIdentityInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BizIdentityInfo {

        /** BizIdentityInfoVerifiedLevelValue enum. */
        enum BizIdentityInfoVerifiedLevelValue {
            UNKNOWN = 0,
            LOW = 1,
            HIGH = 2
        }

        /** BizIdentityInfoHostStorageType enum. */
        enum BizIdentityInfoHostStorageType {
            ON_PREMISE = 0,
            FACEBOOK = 1
        }

        /** BizIdentityInfoActualActorsType enum. */
        enum BizIdentityInfoActualActorsType {
            SELF = 0,
            BSP = 1
        }
    }

    /** Properties of a BizAccountLinkInfo. */
    interface IBizAccountLinkInfo {

        /** BizAccountLinkInfo whatsappBizAcctFbid */
        whatsappBizAcctFbid?: (number|Long|null);

        /** BizAccountLinkInfo whatsappAcctNumber */
        whatsappAcctNumber?: (string|null);

        /** BizAccountLinkInfo issueTime */
        issueTime?: (number|Long|null);

        /** BizAccountLinkInfo hostStorage */
        hostStorage?: (proto.BizAccountLinkInfo.BizAccountLinkInfoHostStorageType|null);

        /** BizAccountLinkInfo accountType */
        accountType?: (proto.BizAccountLinkInfo.BizAccountLinkInfoAccountType|null);
    }

    /** Represents a BizAccountLinkInfo. */
    class BizAccountLinkInfo implements IBizAccountLinkInfo {

        /**
         * Constructs a new BizAccountLinkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IBizAccountLinkInfo);

        /** BizAccountLinkInfo whatsappBizAcctFbid. */
        public whatsappBizAcctFbid: (number|Long);

        /** BizAccountLinkInfo whatsappAcctNumber. */
        public whatsappAcctNumber: string;

        /** BizAccountLinkInfo issueTime. */
        public issueTime: (number|Long);

        /** BizAccountLinkInfo hostStorage. */
        public hostStorage: proto.BizAccountLinkInfo.BizAccountLinkInfoHostStorageType;

        /** BizAccountLinkInfo accountType. */
        public accountType: proto.BizAccountLinkInfo.BizAccountLinkInfoAccountType;

        /**
         * Creates a new BizAccountLinkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizAccountLinkInfo instance
         */
        public static create(properties?: proto.IBizAccountLinkInfo): proto.BizAccountLinkInfo;

        /**
         * Encodes the specified BizAccountLinkInfo message. Does not implicitly {@link proto.BizAccountLinkInfo.verify|verify} messages.
         * @param message BizAccountLinkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IBizAccountLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizAccountLinkInfo message, length delimited. Does not implicitly {@link proto.BizAccountLinkInfo.verify|verify} messages.
         * @param message BizAccountLinkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IBizAccountLinkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BizAccountLinkInfo;

        /**
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BizAccountLinkInfo;

        /**
         * Verifies a BizAccountLinkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizAccountLinkInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizAccountLinkInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.BizAccountLinkInfo;

        /**
         * Creates a plain object from a BizAccountLinkInfo message. Also converts values to other types if specified.
         * @param message BizAccountLinkInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.BizAccountLinkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizAccountLinkInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BizAccountLinkInfo {

        /** BizAccountLinkInfoHostStorageType enum. */
        enum BizAccountLinkInfoHostStorageType {
            ON_PREMISE = 0,
            FACEBOOK = 1
        }

        /** BizAccountLinkInfoAccountType enum. */
        enum BizAccountLinkInfoAccountType {
            ENTERPRISE = 0,
            PAGE = 1
        }
    }

    /** Properties of a BizAccountPayload. */
    interface IBizAccountPayload {

        /** BizAccountPayload vnameCert */
        vnameCert?: (proto.IVerifiedNameCertificate|null);

        /** BizAccountPayload bizAcctLinkInfo */
        bizAcctLinkInfo?: (Uint8Array|null);
    }

    /** Represents a BizAccountPayload. */
    class BizAccountPayload implements IBizAccountPayload {

        /**
         * Constructs a new BizAccountPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IBizAccountPayload);

        /** BizAccountPayload vnameCert. */
        public vnameCert?: (proto.IVerifiedNameCertificate|null);

        /** BizAccountPayload bizAcctLinkInfo. */
        public bizAcctLinkInfo: Uint8Array;

        /**
         * Creates a new BizAccountPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizAccountPayload instance
         */
        public static create(properties?: proto.IBizAccountPayload): proto.BizAccountPayload;

        /**
         * Encodes the specified BizAccountPayload message. Does not implicitly {@link proto.BizAccountPayload.verify|verify} messages.
         * @param message BizAccountPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IBizAccountPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BizAccountPayload message, length delimited. Does not implicitly {@link proto.BizAccountPayload.verify|verify} messages.
         * @param message BizAccountPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IBizAccountPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizAccountPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BizAccountPayload;

        /**
         * Decodes a BizAccountPayload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BizAccountPayload;

        /**
         * Verifies a BizAccountPayload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BizAccountPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BizAccountPayload
         */
        public static fromObject(object: { [k: string]: any }): proto.BizAccountPayload;

        /**
         * Creates a plain object from a BizAccountPayload message. Also converts values to other types if specified.
         * @param message BizAccountPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.BizAccountPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BizAccountPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifiedNameCertificate. */
    interface IVerifiedNameCertificate {

        /** VerifiedNameCertificate details */
        details?: (Uint8Array|null);

        /** VerifiedNameCertificate signature */
        signature?: (Uint8Array|null);

        /** VerifiedNameCertificate serverSignature */
        serverSignature?: (Uint8Array|null);
    }

    /** Represents a VerifiedNameCertificate. */
    class VerifiedNameCertificate implements IVerifiedNameCertificate {

        /**
         * Constructs a new VerifiedNameCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IVerifiedNameCertificate);

        /** VerifiedNameCertificate details. */
        public details: Uint8Array;

        /** VerifiedNameCertificate signature. */
        public signature: Uint8Array;

        /** VerifiedNameCertificate serverSignature. */
        public serverSignature: Uint8Array;

        /**
         * Creates a new VerifiedNameCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifiedNameCertificate instance
         */
        public static create(properties?: proto.IVerifiedNameCertificate): proto.VerifiedNameCertificate;

        /**
         * Encodes the specified VerifiedNameCertificate message. Does not implicitly {@link proto.VerifiedNameCertificate.verify|verify} messages.
         * @param message VerifiedNameCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IVerifiedNameCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifiedNameCertificate message, length delimited. Does not implicitly {@link proto.VerifiedNameCertificate.verify|verify} messages.
         * @param message VerifiedNameCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IVerifiedNameCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.VerifiedNameCertificate;

        /**
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.VerifiedNameCertificate;

        /**
         * Verifies a VerifiedNameCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifiedNameCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifiedNameCertificate
         */
        public static fromObject(object: { [k: string]: any }): proto.VerifiedNameCertificate;

        /**
         * Creates a plain object from a VerifiedNameCertificate message. Also converts values to other types if specified.
         * @param message VerifiedNameCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.VerifiedNameCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifiedNameCertificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LocalizedName. */
    interface ILocalizedName {

        /** LocalizedName lg */
        lg?: (string|null);

        /** LocalizedName lc */
        lc?: (string|null);

        /** LocalizedName verifiedName */
        verifiedName?: (string|null);
    }

    /** Represents a LocalizedName. */
    class LocalizedName implements ILocalizedName {

        /**
         * Constructs a new LocalizedName.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILocalizedName);

        /** LocalizedName lg. */
        public lg: string;

        /** LocalizedName lc. */
        public lc: string;

        /** LocalizedName verifiedName. */
        public verifiedName: string;

        /**
         * Creates a new LocalizedName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocalizedName instance
         */
        public static create(properties?: proto.ILocalizedName): proto.LocalizedName;

        /**
         * Encodes the specified LocalizedName message. Does not implicitly {@link proto.LocalizedName.verify|verify} messages.
         * @param message LocalizedName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILocalizedName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LocalizedName message, length delimited. Does not implicitly {@link proto.LocalizedName.verify|verify} messages.
         * @param message LocalizedName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILocalizedName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocalizedName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LocalizedName;

        /**
         * Decodes a LocalizedName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LocalizedName;

        /**
         * Verifies a LocalizedName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LocalizedName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocalizedName
         */
        public static fromObject(object: { [k: string]: any }): proto.LocalizedName;

        /**
         * Creates a plain object from a LocalizedName message. Also converts values to other types if specified.
         * @param message LocalizedName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LocalizedName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocalizedName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncActionData. */
    interface ISyncActionData {

        /** SyncActionData index */
        index?: (Uint8Array|null);

        /** SyncActionData value */
        value?: (proto.ISyncActionValue|null);

        /** SyncActionData padding */
        padding?: (Uint8Array|null);

        /** SyncActionData version */
        version?: (number|null);
    }

    /** Represents a SyncActionData. */
    class SyncActionData implements ISyncActionData {

        /**
         * Constructs a new SyncActionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncActionData);

        /** SyncActionData index. */
        public index: Uint8Array;

        /** SyncActionData value. */
        public value?: (proto.ISyncActionValue|null);

        /** SyncActionData padding. */
        public padding: Uint8Array;

        /** SyncActionData version. */
        public version: number;

        /**
         * Creates a new SyncActionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncActionData instance
         */
        public static create(properties?: proto.ISyncActionData): proto.SyncActionData;

        /**
         * Encodes the specified SyncActionData message. Does not implicitly {@link proto.SyncActionData.verify|verify} messages.
         * @param message SyncActionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncActionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncActionData message, length delimited. Does not implicitly {@link proto.SyncActionData.verify|verify} messages.
         * @param message SyncActionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncActionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncActionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncActionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncActionData;

        /**
         * Decodes a SyncActionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncActionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncActionData;

        /**
         * Verifies a SyncActionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncActionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncActionData
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncActionData;

        /**
         * Creates a plain object from a SyncActionData message. Also converts values to other types if specified.
         * @param message SyncActionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncActionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncActionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StarAction. */
    interface IStarAction {

        /** StarAction starred */
        starred?: (boolean|null);
    }

    /** Represents a StarAction. */
    class StarAction implements IStarAction {

        /**
         * Constructs a new StarAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStarAction);

        /** StarAction starred. */
        public starred: boolean;

        /**
         * Creates a new StarAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StarAction instance
         */
        public static create(properties?: proto.IStarAction): proto.StarAction;

        /**
         * Encodes the specified StarAction message. Does not implicitly {@link proto.StarAction.verify|verify} messages.
         * @param message StarAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStarAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StarAction message, length delimited. Does not implicitly {@link proto.StarAction.verify|verify} messages.
         * @param message StarAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStarAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StarAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StarAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StarAction;

        /**
         * Decodes a StarAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StarAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StarAction;

        /**
         * Verifies a StarAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StarAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StarAction
         */
        public static fromObject(object: { [k: string]: any }): proto.StarAction;

        /**
         * Creates a plain object from a StarAction message. Also converts values to other types if specified.
         * @param message StarAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StarAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StarAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContactAction. */
    interface IContactAction {

        /** ContactAction fullName */
        fullName?: (string|null);

        /** ContactAction firstName */
        firstName?: (string|null);
    }

    /** Represents a ContactAction. */
    class ContactAction implements IContactAction {

        /**
         * Constructs a new ContactAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IContactAction);

        /** ContactAction fullName. */
        public fullName: string;

        /** ContactAction firstName. */
        public firstName: string;

        /**
         * Creates a new ContactAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContactAction instance
         */
        public static create(properties?: proto.IContactAction): proto.ContactAction;

        /**
         * Encodes the specified ContactAction message. Does not implicitly {@link proto.ContactAction.verify|verify} messages.
         * @param message ContactAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IContactAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContactAction message, length delimited. Does not implicitly {@link proto.ContactAction.verify|verify} messages.
         * @param message ContactAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IContactAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContactAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContactAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ContactAction;

        /**
         * Decodes a ContactAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContactAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ContactAction;

        /**
         * Verifies a ContactAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContactAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContactAction
         */
        public static fromObject(object: { [k: string]: any }): proto.ContactAction;

        /**
         * Creates a plain object from a ContactAction message. Also converts values to other types if specified.
         * @param message ContactAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ContactAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContactAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MuteAction. */
    interface IMuteAction {

        /** MuteAction muted */
        muted?: (boolean|null);

        /** MuteAction muteEndTimestamp */
        muteEndTimestamp?: (number|Long|null);
    }

    /** Represents a MuteAction. */
    class MuteAction implements IMuteAction {

        /**
         * Constructs a new MuteAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMuteAction);

        /** MuteAction muted. */
        public muted: boolean;

        /** MuteAction muteEndTimestamp. */
        public muteEndTimestamp: (number|Long);

        /**
         * Creates a new MuteAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MuteAction instance
         */
        public static create(properties?: proto.IMuteAction): proto.MuteAction;

        /**
         * Encodes the specified MuteAction message. Does not implicitly {@link proto.MuteAction.verify|verify} messages.
         * @param message MuteAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMuteAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MuteAction message, length delimited. Does not implicitly {@link proto.MuteAction.verify|verify} messages.
         * @param message MuteAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMuteAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MuteAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MuteAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MuteAction;

        /**
         * Decodes a MuteAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MuteAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MuteAction;

        /**
         * Verifies a MuteAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MuteAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MuteAction
         */
        public static fromObject(object: { [k: string]: any }): proto.MuteAction;

        /**
         * Creates a plain object from a MuteAction message. Also converts values to other types if specified.
         * @param message MuteAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MuteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MuteAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PinAction. */
    interface IPinAction {

        /** PinAction pinned */
        pinned?: (boolean|null);
    }

    /** Represents a PinAction. */
    class PinAction implements IPinAction {

        /**
         * Constructs a new PinAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPinAction);

        /** PinAction pinned. */
        public pinned: boolean;

        /**
         * Creates a new PinAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PinAction instance
         */
        public static create(properties?: proto.IPinAction): proto.PinAction;

        /**
         * Encodes the specified PinAction message. Does not implicitly {@link proto.PinAction.verify|verify} messages.
         * @param message PinAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPinAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PinAction message, length delimited. Does not implicitly {@link proto.PinAction.verify|verify} messages.
         * @param message PinAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPinAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PinAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PinAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PinAction;

        /**
         * Decodes a PinAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PinAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PinAction;

        /**
         * Verifies a PinAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PinAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PinAction
         */
        public static fromObject(object: { [k: string]: any }): proto.PinAction;

        /**
         * Creates a plain object from a PinAction message. Also converts values to other types if specified.
         * @param message PinAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PinAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PinAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SecurityNotificationSetting. */
    interface ISecurityNotificationSetting {

        /** SecurityNotificationSetting showNotification */
        showNotification?: (boolean|null);
    }

    /** Represents a SecurityNotificationSetting. */
    class SecurityNotificationSetting implements ISecurityNotificationSetting {

        /**
         * Constructs a new SecurityNotificationSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISecurityNotificationSetting);

        /** SecurityNotificationSetting showNotification. */
        public showNotification: boolean;

        /**
         * Creates a new SecurityNotificationSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SecurityNotificationSetting instance
         */
        public static create(properties?: proto.ISecurityNotificationSetting): proto.SecurityNotificationSetting;

        /**
         * Encodes the specified SecurityNotificationSetting message. Does not implicitly {@link proto.SecurityNotificationSetting.verify|verify} messages.
         * @param message SecurityNotificationSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISecurityNotificationSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SecurityNotificationSetting message, length delimited. Does not implicitly {@link proto.SecurityNotificationSetting.verify|verify} messages.
         * @param message SecurityNotificationSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISecurityNotificationSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SecurityNotificationSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SecurityNotificationSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SecurityNotificationSetting;

        /**
         * Decodes a SecurityNotificationSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SecurityNotificationSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SecurityNotificationSetting;

        /**
         * Verifies a SecurityNotificationSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SecurityNotificationSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SecurityNotificationSetting
         */
        public static fromObject(object: { [k: string]: any }): proto.SecurityNotificationSetting;

        /**
         * Creates a plain object from a SecurityNotificationSetting message. Also converts values to other types if specified.
         * @param message SecurityNotificationSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SecurityNotificationSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SecurityNotificationSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PushNameSetting. */
    interface IPushNameSetting {

        /** PushNameSetting name */
        name?: (string|null);
    }

    /** Represents a PushNameSetting. */
    class PushNameSetting implements IPushNameSetting {

        /**
         * Constructs a new PushNameSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPushNameSetting);

        /** PushNameSetting name. */
        public name: string;

        /**
         * Creates a new PushNameSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushNameSetting instance
         */
        public static create(properties?: proto.IPushNameSetting): proto.PushNameSetting;

        /**
         * Encodes the specified PushNameSetting message. Does not implicitly {@link proto.PushNameSetting.verify|verify} messages.
         * @param message PushNameSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPushNameSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushNameSetting message, length delimited. Does not implicitly {@link proto.PushNameSetting.verify|verify} messages.
         * @param message PushNameSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPushNameSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushNameSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushNameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PushNameSetting;

        /**
         * Decodes a PushNameSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushNameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PushNameSetting;

        /**
         * Verifies a PushNameSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushNameSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushNameSetting
         */
        public static fromObject(object: { [k: string]: any }): proto.PushNameSetting;

        /**
         * Creates a plain object from a PushNameSetting message. Also converts values to other types if specified.
         * @param message PushNameSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PushNameSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushNameSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LocaleSetting. */
    interface ILocaleSetting {

        /** LocaleSetting locale */
        locale?: (string|null);
    }

    /** Represents a LocaleSetting. */
    class LocaleSetting implements ILocaleSetting {

        /**
         * Constructs a new LocaleSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILocaleSetting);

        /** LocaleSetting locale. */
        public locale: string;

        /**
         * Creates a new LocaleSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocaleSetting instance
         */
        public static create(properties?: proto.ILocaleSetting): proto.LocaleSetting;

        /**
         * Encodes the specified LocaleSetting message. Does not implicitly {@link proto.LocaleSetting.verify|verify} messages.
         * @param message LocaleSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILocaleSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LocaleSetting message, length delimited. Does not implicitly {@link proto.LocaleSetting.verify|verify} messages.
         * @param message LocaleSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILocaleSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocaleSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocaleSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LocaleSetting;

        /**
         * Decodes a LocaleSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LocaleSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LocaleSetting;

        /**
         * Verifies a LocaleSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LocaleSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocaleSetting
         */
        public static fromObject(object: { [k: string]: any }): proto.LocaleSetting;

        /**
         * Creates a plain object from a LocaleSetting message. Also converts values to other types if specified.
         * @param message LocaleSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LocaleSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocaleSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuickReplyAction. */
    interface IQuickReplyAction {

        /** QuickReplyAction shortcut */
        shortcut?: (string|null);

        /** QuickReplyAction message */
        message?: (string|null);

        /** QuickReplyAction keywords */
        keywords?: (string[]|null);

        /** QuickReplyAction count */
        count?: (number|null);

        /** QuickReplyAction deleted */
        deleted?: (boolean|null);
    }

    /** Represents a QuickReplyAction. */
    class QuickReplyAction implements IQuickReplyAction {

        /**
         * Constructs a new QuickReplyAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IQuickReplyAction);

        /** QuickReplyAction shortcut. */
        public shortcut: string;

        /** QuickReplyAction message. */
        public message: string;

        /** QuickReplyAction keywords. */
        public keywords: string[];

        /** QuickReplyAction count. */
        public count: number;

        /** QuickReplyAction deleted. */
        public deleted: boolean;

        /**
         * Creates a new QuickReplyAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickReplyAction instance
         */
        public static create(properties?: proto.IQuickReplyAction): proto.QuickReplyAction;

        /**
         * Encodes the specified QuickReplyAction message. Does not implicitly {@link proto.QuickReplyAction.verify|verify} messages.
         * @param message QuickReplyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IQuickReplyAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickReplyAction message, length delimited. Does not implicitly {@link proto.QuickReplyAction.verify|verify} messages.
         * @param message QuickReplyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IQuickReplyAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickReplyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickReplyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.QuickReplyAction;

        /**
         * Decodes a QuickReplyAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickReplyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.QuickReplyAction;

        /**
         * Verifies a QuickReplyAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickReplyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickReplyAction
         */
        public static fromObject(object: { [k: string]: any }): proto.QuickReplyAction;

        /**
         * Creates a plain object from a QuickReplyAction message. Also converts values to other types if specified.
         * @param message QuickReplyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.QuickReplyAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickReplyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LabelAssociationAction. */
    interface ILabelAssociationAction {

        /** LabelAssociationAction labeled */
        labeled?: (boolean|null);
    }

    /** Represents a LabelAssociationAction. */
    class LabelAssociationAction implements ILabelAssociationAction {

        /**
         * Constructs a new LabelAssociationAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILabelAssociationAction);

        /** LabelAssociationAction labeled. */
        public labeled: boolean;

        /**
         * Creates a new LabelAssociationAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelAssociationAction instance
         */
        public static create(properties?: proto.ILabelAssociationAction): proto.LabelAssociationAction;

        /**
         * Encodes the specified LabelAssociationAction message. Does not implicitly {@link proto.LabelAssociationAction.verify|verify} messages.
         * @param message LabelAssociationAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILabelAssociationAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelAssociationAction message, length delimited. Does not implicitly {@link proto.LabelAssociationAction.verify|verify} messages.
         * @param message LabelAssociationAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILabelAssociationAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelAssociationAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelAssociationAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LabelAssociationAction;

        /**
         * Decodes a LabelAssociationAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelAssociationAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LabelAssociationAction;

        /**
         * Verifies a LabelAssociationAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelAssociationAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelAssociationAction
         */
        public static fromObject(object: { [k: string]: any }): proto.LabelAssociationAction;

        /**
         * Creates a plain object from a LabelAssociationAction message. Also converts values to other types if specified.
         * @param message LabelAssociationAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LabelAssociationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelAssociationAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LabelEditAction. */
    interface ILabelEditAction {

        /** LabelEditAction name */
        name?: (string|null);

        /** LabelEditAction color */
        color?: (number|null);

        /** LabelEditAction predefinedId */
        predefinedId?: (number|null);

        /** LabelEditAction deleted */
        deleted?: (boolean|null);
    }

    /** Represents a LabelEditAction. */
    class LabelEditAction implements ILabelEditAction {

        /**
         * Constructs a new LabelEditAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILabelEditAction);

        /** LabelEditAction name. */
        public name: string;

        /** LabelEditAction color. */
        public color: number;

        /** LabelEditAction predefinedId. */
        public predefinedId: number;

        /** LabelEditAction deleted. */
        public deleted: boolean;

        /**
         * Creates a new LabelEditAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelEditAction instance
         */
        public static create(properties?: proto.ILabelEditAction): proto.LabelEditAction;

        /**
         * Encodes the specified LabelEditAction message. Does not implicitly {@link proto.LabelEditAction.verify|verify} messages.
         * @param message LabelEditAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILabelEditAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelEditAction message, length delimited. Does not implicitly {@link proto.LabelEditAction.verify|verify} messages.
         * @param message LabelEditAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILabelEditAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelEditAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelEditAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LabelEditAction;

        /**
         * Decodes a LabelEditAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelEditAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LabelEditAction;

        /**
         * Verifies a LabelEditAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelEditAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelEditAction
         */
        public static fromObject(object: { [k: string]: any }): proto.LabelEditAction;

        /**
         * Creates a plain object from a LabelEditAction message. Also converts values to other types if specified.
         * @param message LabelEditAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LabelEditAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelEditAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecentStickerWeightsAction. */
    interface IRecentStickerWeightsAction {

        /** RecentStickerWeightsAction weights */
        weights?: (proto.IRecentStickerWeight[]|null);
    }

    /** Represents a RecentStickerWeightsAction. */
    class RecentStickerWeightsAction implements IRecentStickerWeightsAction {

        /**
         * Constructs a new RecentStickerWeightsAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRecentStickerWeightsAction);

        /** RecentStickerWeightsAction weights. */
        public weights: proto.IRecentStickerWeight[];

        /**
         * Creates a new RecentStickerWeightsAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecentStickerWeightsAction instance
         */
        public static create(properties?: proto.IRecentStickerWeightsAction): proto.RecentStickerWeightsAction;

        /**
         * Encodes the specified RecentStickerWeightsAction message. Does not implicitly {@link proto.RecentStickerWeightsAction.verify|verify} messages.
         * @param message RecentStickerWeightsAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRecentStickerWeightsAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecentStickerWeightsAction message, length delimited. Does not implicitly {@link proto.RecentStickerWeightsAction.verify|verify} messages.
         * @param message RecentStickerWeightsAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRecentStickerWeightsAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecentStickerWeightsAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecentStickerWeightsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RecentStickerWeightsAction;

        /**
         * Decodes a RecentStickerWeightsAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecentStickerWeightsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RecentStickerWeightsAction;

        /**
         * Verifies a RecentStickerWeightsAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecentStickerWeightsAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecentStickerWeightsAction
         */
        public static fromObject(object: { [k: string]: any }): proto.RecentStickerWeightsAction;

        /**
         * Creates a plain object from a RecentStickerWeightsAction message. Also converts values to other types if specified.
         * @param message RecentStickerWeightsAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RecentStickerWeightsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecentStickerWeightsAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecentStickerMetadata. */
    interface IRecentStickerMetadata {

        /** RecentStickerMetadata directPath */
        directPath?: (string|null);

        /** RecentStickerMetadata encFilehash */
        encFilehash?: (string|null);

        /** RecentStickerMetadata mediaKey */
        mediaKey?: (string|null);

        /** RecentStickerMetadata stanzaId */
        stanzaId?: (string|null);

        /** RecentStickerMetadata chatJid */
        chatJid?: (string|null);

        /** RecentStickerMetadata participant */
        participant?: (string|null);

        /** RecentStickerMetadata isSentByMe */
        isSentByMe?: (boolean|null);
    }

    /** Represents a RecentStickerMetadata. */
    class RecentStickerMetadata implements IRecentStickerMetadata {

        /**
         * Constructs a new RecentStickerMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRecentStickerMetadata);

        /** RecentStickerMetadata directPath. */
        public directPath: string;

        /** RecentStickerMetadata encFilehash. */
        public encFilehash: string;

        /** RecentStickerMetadata mediaKey. */
        public mediaKey: string;

        /** RecentStickerMetadata stanzaId. */
        public stanzaId: string;

        /** RecentStickerMetadata chatJid. */
        public chatJid: string;

        /** RecentStickerMetadata participant. */
        public participant: string;

        /** RecentStickerMetadata isSentByMe. */
        public isSentByMe: boolean;

        /**
         * Creates a new RecentStickerMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecentStickerMetadata instance
         */
        public static create(properties?: proto.IRecentStickerMetadata): proto.RecentStickerMetadata;

        /**
         * Encodes the specified RecentStickerMetadata message. Does not implicitly {@link proto.RecentStickerMetadata.verify|verify} messages.
         * @param message RecentStickerMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRecentStickerMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecentStickerMetadata message, length delimited. Does not implicitly {@link proto.RecentStickerMetadata.verify|verify} messages.
         * @param message RecentStickerMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRecentStickerMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecentStickerMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecentStickerMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RecentStickerMetadata;

        /**
         * Decodes a RecentStickerMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecentStickerMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RecentStickerMetadata;

        /**
         * Verifies a RecentStickerMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecentStickerMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecentStickerMetadata
         */
        public static fromObject(object: { [k: string]: any }): proto.RecentStickerMetadata;

        /**
         * Creates a plain object from a RecentStickerMetadata message. Also converts values to other types if specified.
         * @param message RecentStickerMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RecentStickerMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecentStickerMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecentEmojiWeightsAction. */
    interface IRecentEmojiWeightsAction {

        /** RecentEmojiWeightsAction weights */
        weights?: (proto.IRecentEmojiWeight[]|null);
    }

    /** Represents a RecentEmojiWeightsAction. */
    class RecentEmojiWeightsAction implements IRecentEmojiWeightsAction {

        /**
         * Constructs a new RecentEmojiWeightsAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRecentEmojiWeightsAction);

        /** RecentEmojiWeightsAction weights. */
        public weights: proto.IRecentEmojiWeight[];

        /**
         * Creates a new RecentEmojiWeightsAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecentEmojiWeightsAction instance
         */
        public static create(properties?: proto.IRecentEmojiWeightsAction): proto.RecentEmojiWeightsAction;

        /**
         * Encodes the specified RecentEmojiWeightsAction message. Does not implicitly {@link proto.RecentEmojiWeightsAction.verify|verify} messages.
         * @param message RecentEmojiWeightsAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRecentEmojiWeightsAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecentEmojiWeightsAction message, length delimited. Does not implicitly {@link proto.RecentEmojiWeightsAction.verify|verify} messages.
         * @param message RecentEmojiWeightsAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRecentEmojiWeightsAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecentEmojiWeightsAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecentEmojiWeightsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RecentEmojiWeightsAction;

        /**
         * Decodes a RecentEmojiWeightsAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecentEmojiWeightsAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RecentEmojiWeightsAction;

        /**
         * Verifies a RecentEmojiWeightsAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecentEmojiWeightsAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecentEmojiWeightsAction
         */
        public static fromObject(object: { [k: string]: any }): proto.RecentEmojiWeightsAction;

        /**
         * Creates a plain object from a RecentEmojiWeightsAction message. Also converts values to other types if specified.
         * @param message RecentEmojiWeightsAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RecentEmojiWeightsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecentEmojiWeightsAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArchiveChatAction. */
    interface IArchiveChatAction {

        /** ArchiveChatAction archived */
        archived?: (boolean|null);

        /** ArchiveChatAction messageRange */
        messageRange?: (proto.ISyncActionMessageRange|null);
    }

    /** Represents an ArchiveChatAction. */
    class ArchiveChatAction implements IArchiveChatAction {

        /**
         * Constructs a new ArchiveChatAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IArchiveChatAction);

        /** ArchiveChatAction archived. */
        public archived: boolean;

        /** ArchiveChatAction messageRange. */
        public messageRange?: (proto.ISyncActionMessageRange|null);

        /**
         * Creates a new ArchiveChatAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArchiveChatAction instance
         */
        public static create(properties?: proto.IArchiveChatAction): proto.ArchiveChatAction;

        /**
         * Encodes the specified ArchiveChatAction message. Does not implicitly {@link proto.ArchiveChatAction.verify|verify} messages.
         * @param message ArchiveChatAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IArchiveChatAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArchiveChatAction message, length delimited. Does not implicitly {@link proto.ArchiveChatAction.verify|verify} messages.
         * @param message ArchiveChatAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IArchiveChatAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArchiveChatAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArchiveChatAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ArchiveChatAction;

        /**
         * Decodes an ArchiveChatAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArchiveChatAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ArchiveChatAction;

        /**
         * Verifies an ArchiveChatAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArchiveChatAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArchiveChatAction
         */
        public static fromObject(object: { [k: string]: any }): proto.ArchiveChatAction;

        /**
         * Creates a plain object from an ArchiveChatAction message. Also converts values to other types if specified.
         * @param message ArchiveChatAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ArchiveChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArchiveChatAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteMessageForMeAction. */
    interface IDeleteMessageForMeAction {

        /** DeleteMessageForMeAction deleteMedia */
        deleteMedia?: (boolean|null);

        /** DeleteMessageForMeAction messageTimestamp */
        messageTimestamp?: (number|Long|null);
    }

    /** Represents a DeleteMessageForMeAction. */
    class DeleteMessageForMeAction implements IDeleteMessageForMeAction {

        /**
         * Constructs a new DeleteMessageForMeAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDeleteMessageForMeAction);

        /** DeleteMessageForMeAction deleteMedia. */
        public deleteMedia: boolean;

        /** DeleteMessageForMeAction messageTimestamp. */
        public messageTimestamp: (number|Long);

        /**
         * Creates a new DeleteMessageForMeAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteMessageForMeAction instance
         */
        public static create(properties?: proto.IDeleteMessageForMeAction): proto.DeleteMessageForMeAction;

        /**
         * Encodes the specified DeleteMessageForMeAction message. Does not implicitly {@link proto.DeleteMessageForMeAction.verify|verify} messages.
         * @param message DeleteMessageForMeAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDeleteMessageForMeAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteMessageForMeAction message, length delimited. Does not implicitly {@link proto.DeleteMessageForMeAction.verify|verify} messages.
         * @param message DeleteMessageForMeAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDeleteMessageForMeAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteMessageForMeAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMessageForMeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DeleteMessageForMeAction;

        /**
         * Decodes a DeleteMessageForMeAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMessageForMeAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DeleteMessageForMeAction;

        /**
         * Verifies a DeleteMessageForMeAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteMessageForMeAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMessageForMeAction
         */
        public static fromObject(object: { [k: string]: any }): proto.DeleteMessageForMeAction;

        /**
         * Creates a plain object from a DeleteMessageForMeAction message. Also converts values to other types if specified.
         * @param message DeleteMessageForMeAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DeleteMessageForMeAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteMessageForMeAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MarkChatAsReadAction. */
    interface IMarkChatAsReadAction {

        /** MarkChatAsReadAction read */
        read?: (boolean|null);

        /** MarkChatAsReadAction messageRange */
        messageRange?: (proto.ISyncActionMessageRange|null);
    }

    /** Represents a MarkChatAsReadAction. */
    class MarkChatAsReadAction implements IMarkChatAsReadAction {

        /**
         * Constructs a new MarkChatAsReadAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMarkChatAsReadAction);

        /** MarkChatAsReadAction read. */
        public read: boolean;

        /** MarkChatAsReadAction messageRange. */
        public messageRange?: (proto.ISyncActionMessageRange|null);

        /**
         * Creates a new MarkChatAsReadAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MarkChatAsReadAction instance
         */
        public static create(properties?: proto.IMarkChatAsReadAction): proto.MarkChatAsReadAction;

        /**
         * Encodes the specified MarkChatAsReadAction message. Does not implicitly {@link proto.MarkChatAsReadAction.verify|verify} messages.
         * @param message MarkChatAsReadAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMarkChatAsReadAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MarkChatAsReadAction message, length delimited. Does not implicitly {@link proto.MarkChatAsReadAction.verify|verify} messages.
         * @param message MarkChatAsReadAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMarkChatAsReadAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MarkChatAsReadAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MarkChatAsReadAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MarkChatAsReadAction;

        /**
         * Decodes a MarkChatAsReadAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MarkChatAsReadAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MarkChatAsReadAction;

        /**
         * Verifies a MarkChatAsReadAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MarkChatAsReadAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MarkChatAsReadAction
         */
        public static fromObject(object: { [k: string]: any }): proto.MarkChatAsReadAction;

        /**
         * Creates a plain object from a MarkChatAsReadAction message. Also converts values to other types if specified.
         * @param message MarkChatAsReadAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MarkChatAsReadAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MarkChatAsReadAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearChatAction. */
    interface IClearChatAction {

        /** ClearChatAction messageRange */
        messageRange?: (proto.ISyncActionMessageRange|null);
    }

    /** Represents a ClearChatAction. */
    class ClearChatAction implements IClearChatAction {

        /**
         * Constructs a new ClearChatAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IClearChatAction);

        /** ClearChatAction messageRange. */
        public messageRange?: (proto.ISyncActionMessageRange|null);

        /**
         * Creates a new ClearChatAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClearChatAction instance
         */
        public static create(properties?: proto.IClearChatAction): proto.ClearChatAction;

        /**
         * Encodes the specified ClearChatAction message. Does not implicitly {@link proto.ClearChatAction.verify|verify} messages.
         * @param message ClearChatAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IClearChatAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClearChatAction message, length delimited. Does not implicitly {@link proto.ClearChatAction.verify|verify} messages.
         * @param message ClearChatAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IClearChatAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClearChatAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClearChatAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ClearChatAction;

        /**
         * Decodes a ClearChatAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClearChatAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ClearChatAction;

        /**
         * Verifies a ClearChatAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClearChatAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearChatAction
         */
        public static fromObject(object: { [k: string]: any }): proto.ClearChatAction;

        /**
         * Creates a plain object from a ClearChatAction message. Also converts values to other types if specified.
         * @param message ClearChatAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ClearChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearChatAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteChatAction. */
    interface IDeleteChatAction {

        /** DeleteChatAction messageRange */
        messageRange?: (proto.ISyncActionMessageRange|null);
    }

    /** Represents a DeleteChatAction. */
    class DeleteChatAction implements IDeleteChatAction {

        /**
         * Constructs a new DeleteChatAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDeleteChatAction);

        /** DeleteChatAction messageRange. */
        public messageRange?: (proto.ISyncActionMessageRange|null);

        /**
         * Creates a new DeleteChatAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteChatAction instance
         */
        public static create(properties?: proto.IDeleteChatAction): proto.DeleteChatAction;

        /**
         * Encodes the specified DeleteChatAction message. Does not implicitly {@link proto.DeleteChatAction.verify|verify} messages.
         * @param message DeleteChatAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDeleteChatAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteChatAction message, length delimited. Does not implicitly {@link proto.DeleteChatAction.verify|verify} messages.
         * @param message DeleteChatAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDeleteChatAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteChatAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteChatAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DeleteChatAction;

        /**
         * Decodes a DeleteChatAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteChatAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DeleteChatAction;

        /**
         * Verifies a DeleteChatAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteChatAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteChatAction
         */
        public static fromObject(object: { [k: string]: any }): proto.DeleteChatAction;

        /**
         * Creates a plain object from a DeleteChatAction message. Also converts values to other types if specified.
         * @param message DeleteChatAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DeleteChatAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteChatAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnarchiveChatsSetting. */
    interface IUnarchiveChatsSetting {

        /** UnarchiveChatsSetting unarchiveChats */
        unarchiveChats?: (boolean|null);
    }

    /** Represents an UnarchiveChatsSetting. */
    class UnarchiveChatsSetting implements IUnarchiveChatsSetting {

        /**
         * Constructs a new UnarchiveChatsSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUnarchiveChatsSetting);

        /** UnarchiveChatsSetting unarchiveChats. */
        public unarchiveChats: boolean;

        /**
         * Creates a new UnarchiveChatsSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnarchiveChatsSetting instance
         */
        public static create(properties?: proto.IUnarchiveChatsSetting): proto.UnarchiveChatsSetting;

        /**
         * Encodes the specified UnarchiveChatsSetting message. Does not implicitly {@link proto.UnarchiveChatsSetting.verify|verify} messages.
         * @param message UnarchiveChatsSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUnarchiveChatsSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnarchiveChatsSetting message, length delimited. Does not implicitly {@link proto.UnarchiveChatsSetting.verify|verify} messages.
         * @param message UnarchiveChatsSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUnarchiveChatsSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnarchiveChatsSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnarchiveChatsSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UnarchiveChatsSetting;

        /**
         * Decodes an UnarchiveChatsSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnarchiveChatsSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UnarchiveChatsSetting;

        /**
         * Verifies an UnarchiveChatsSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnarchiveChatsSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnarchiveChatsSetting
         */
        public static fromObject(object: { [k: string]: any }): proto.UnarchiveChatsSetting;

        /**
         * Creates a plain object from an UnarchiveChatsSetting message. Also converts values to other types if specified.
         * @param message UnarchiveChatsSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UnarchiveChatsSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnarchiveChatsSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncActionMessageRange. */
    interface ISyncActionMessageRange {

        /** SyncActionMessageRange lastMessageTimestamp */
        lastMessageTimestamp?: (number|Long|null);

        /** SyncActionMessageRange lastSystemMessageTimestamp */
        lastSystemMessageTimestamp?: (number|Long|null);

        /** SyncActionMessageRange messages */
        messages?: (proto.ISyncActionMessage[]|null);
    }

    /** Represents a SyncActionMessageRange. */
    class SyncActionMessageRange implements ISyncActionMessageRange {

        /**
         * Constructs a new SyncActionMessageRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncActionMessageRange);

        /** SyncActionMessageRange lastMessageTimestamp. */
        public lastMessageTimestamp: (number|Long);

        /** SyncActionMessageRange lastSystemMessageTimestamp. */
        public lastSystemMessageTimestamp: (number|Long);

        /** SyncActionMessageRange messages. */
        public messages: proto.ISyncActionMessage[];

        /**
         * Creates a new SyncActionMessageRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncActionMessageRange instance
         */
        public static create(properties?: proto.ISyncActionMessageRange): proto.SyncActionMessageRange;

        /**
         * Encodes the specified SyncActionMessageRange message. Does not implicitly {@link proto.SyncActionMessageRange.verify|verify} messages.
         * @param message SyncActionMessageRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncActionMessageRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncActionMessageRange message, length delimited. Does not implicitly {@link proto.SyncActionMessageRange.verify|verify} messages.
         * @param message SyncActionMessageRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncActionMessageRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncActionMessageRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncActionMessageRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncActionMessageRange;

        /**
         * Decodes a SyncActionMessageRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncActionMessageRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncActionMessageRange;

        /**
         * Verifies a SyncActionMessageRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncActionMessageRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncActionMessageRange
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncActionMessageRange;

        /**
         * Creates a plain object from a SyncActionMessageRange message. Also converts values to other types if specified.
         * @param message SyncActionMessageRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncActionMessageRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncActionMessageRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncActionMessage. */
    interface ISyncActionMessage {

        /** SyncActionMessage key */
        key?: (proto.IMessageKey|null);

        /** SyncActionMessage timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a SyncActionMessage. */
    class SyncActionMessage implements ISyncActionMessage {

        /**
         * Constructs a new SyncActionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncActionMessage);

        /** SyncActionMessage key. */
        public key?: (proto.IMessageKey|null);

        /** SyncActionMessage timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new SyncActionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncActionMessage instance
         */
        public static create(properties?: proto.ISyncActionMessage): proto.SyncActionMessage;

        /**
         * Encodes the specified SyncActionMessage message. Does not implicitly {@link proto.SyncActionMessage.verify|verify} messages.
         * @param message SyncActionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncActionMessage message, length delimited. Does not implicitly {@link proto.SyncActionMessage.verify|verify} messages.
         * @param message SyncActionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncActionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncActionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncActionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncActionMessage;

        /**
         * Decodes a SyncActionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncActionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncActionMessage;

        /**
         * Verifies a SyncActionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncActionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncActionMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncActionMessage;

        /**
         * Creates a plain object from a SyncActionMessage message. Also converts values to other types if specified.
         * @param message SyncActionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncActionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncActionMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeyExpiration. */
    interface IKeyExpiration {

        /** KeyExpiration expiredKeyEpoch */
        expiredKeyEpoch?: (number|null);
    }

    /** Represents a KeyExpiration. */
    class KeyExpiration implements IKeyExpiration {

        /**
         * Constructs a new KeyExpiration.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IKeyExpiration);

        /** KeyExpiration expiredKeyEpoch. */
        public expiredKeyEpoch: number;

        /**
         * Creates a new KeyExpiration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyExpiration instance
         */
        public static create(properties?: proto.IKeyExpiration): proto.KeyExpiration;

        /**
         * Encodes the specified KeyExpiration message. Does not implicitly {@link proto.KeyExpiration.verify|verify} messages.
         * @param message KeyExpiration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IKeyExpiration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyExpiration message, length delimited. Does not implicitly {@link proto.KeyExpiration.verify|verify} messages.
         * @param message KeyExpiration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IKeyExpiration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyExpiration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyExpiration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.KeyExpiration;

        /**
         * Decodes a KeyExpiration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyExpiration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.KeyExpiration;

        /**
         * Verifies a KeyExpiration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyExpiration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyExpiration
         */
        public static fromObject(object: { [k: string]: any }): proto.KeyExpiration;

        /**
         * Creates a plain object from a KeyExpiration message. Also converts values to other types if specified.
         * @param message KeyExpiration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.KeyExpiration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyExpiration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncActionValue. */
    interface ISyncActionValue {

        /** SyncActionValue timestamp */
        timestamp?: (number|Long|null);

        /** SyncActionValue starAction */
        starAction?: (proto.IStarAction|null);

        /** SyncActionValue contactAction */
        contactAction?: (proto.IContactAction|null);

        /** SyncActionValue muteAction */
        muteAction?: (proto.IMuteAction|null);

        /** SyncActionValue pinAction */
        pinAction?: (proto.IPinAction|null);

        /** SyncActionValue securityNotificationSetting */
        securityNotificationSetting?: (proto.ISecurityNotificationSetting|null);

        /** SyncActionValue pushNameSetting */
        pushNameSetting?: (proto.IPushNameSetting|null);

        /** SyncActionValue quickReplyAction */
        quickReplyAction?: (proto.IQuickReplyAction|null);

        /** SyncActionValue recentStickerWeightsAction */
        recentStickerWeightsAction?: (proto.IRecentStickerWeightsAction|null);

        /** SyncActionValue recentStickerMetadata */
        recentStickerMetadata?: (proto.IRecentStickerMetadata|null);

        /** SyncActionValue recentEmojiWeightsAction */
        recentEmojiWeightsAction?: (proto.IRecentEmojiWeightsAction|null);

        /** SyncActionValue labelEditAction */
        labelEditAction?: (proto.ILabelEditAction|null);

        /** SyncActionValue labelAssociationAction */
        labelAssociationAction?: (proto.ILabelAssociationAction|null);

        /** SyncActionValue localeSetting */
        localeSetting?: (proto.ILocaleSetting|null);

        /** SyncActionValue archiveChatAction */
        archiveChatAction?: (proto.IArchiveChatAction|null);

        /** SyncActionValue deleteMessageForMeAction */
        deleteMessageForMeAction?: (proto.IDeleteMessageForMeAction|null);

        /** SyncActionValue keyExpiration */
        keyExpiration?: (proto.IKeyExpiration|null);

        /** SyncActionValue markChatAsReadAction */
        markChatAsReadAction?: (proto.IMarkChatAsReadAction|null);

        /** SyncActionValue clearChatAction */
        clearChatAction?: (proto.IClearChatAction|null);

        /** SyncActionValue deleteChatAction */
        deleteChatAction?: (proto.IDeleteChatAction|null);

        /** SyncActionValue unarchiveChatsSetting */
        unarchiveChatsSetting?: (proto.IUnarchiveChatsSetting|null);
    }

    /** Represents a SyncActionValue. */
    class SyncActionValue implements ISyncActionValue {

        /**
         * Constructs a new SyncActionValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncActionValue);

        /** SyncActionValue timestamp. */
        public timestamp: (number|Long);

        /** SyncActionValue starAction. */
        public starAction?: (proto.IStarAction|null);

        /** SyncActionValue contactAction. */
        public contactAction?: (proto.IContactAction|null);

        /** SyncActionValue muteAction. */
        public muteAction?: (proto.IMuteAction|null);

        /** SyncActionValue pinAction. */
        public pinAction?: (proto.IPinAction|null);

        /** SyncActionValue securityNotificationSetting. */
        public securityNotificationSetting?: (proto.ISecurityNotificationSetting|null);

        /** SyncActionValue pushNameSetting. */
        public pushNameSetting?: (proto.IPushNameSetting|null);

        /** SyncActionValue quickReplyAction. */
        public quickReplyAction?: (proto.IQuickReplyAction|null);

        /** SyncActionValue recentStickerWeightsAction. */
        public recentStickerWeightsAction?: (proto.IRecentStickerWeightsAction|null);

        /** SyncActionValue recentStickerMetadata. */
        public recentStickerMetadata?: (proto.IRecentStickerMetadata|null);

        /** SyncActionValue recentEmojiWeightsAction. */
        public recentEmojiWeightsAction?: (proto.IRecentEmojiWeightsAction|null);

        /** SyncActionValue labelEditAction. */
        public labelEditAction?: (proto.ILabelEditAction|null);

        /** SyncActionValue labelAssociationAction. */
        public labelAssociationAction?: (proto.ILabelAssociationAction|null);

        /** SyncActionValue localeSetting. */
        public localeSetting?: (proto.ILocaleSetting|null);

        /** SyncActionValue archiveChatAction. */
        public archiveChatAction?: (proto.IArchiveChatAction|null);

        /** SyncActionValue deleteMessageForMeAction. */
        public deleteMessageForMeAction?: (proto.IDeleteMessageForMeAction|null);

        /** SyncActionValue keyExpiration. */
        public keyExpiration?: (proto.IKeyExpiration|null);

        /** SyncActionValue markChatAsReadAction. */
        public markChatAsReadAction?: (proto.IMarkChatAsReadAction|null);

        /** SyncActionValue clearChatAction. */
        public clearChatAction?: (proto.IClearChatAction|null);

        /** SyncActionValue deleteChatAction. */
        public deleteChatAction?: (proto.IDeleteChatAction|null);

        /** SyncActionValue unarchiveChatsSetting. */
        public unarchiveChatsSetting?: (proto.IUnarchiveChatsSetting|null);

        /**
         * Creates a new SyncActionValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncActionValue instance
         */
        public static create(properties?: proto.ISyncActionValue): proto.SyncActionValue;

        /**
         * Encodes the specified SyncActionValue message. Does not implicitly {@link proto.SyncActionValue.verify|verify} messages.
         * @param message SyncActionValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncActionValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncActionValue message, length delimited. Does not implicitly {@link proto.SyncActionValue.verify|verify} messages.
         * @param message SyncActionValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncActionValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncActionValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncActionValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncActionValue;

        /**
         * Decodes a SyncActionValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncActionValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncActionValue;

        /**
         * Verifies a SyncActionValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncActionValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncActionValue
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncActionValue;

        /**
         * Creates a plain object from a SyncActionValue message. Also converts values to other types if specified.
         * @param message SyncActionValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncActionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncActionValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecentEmojiWeight. */
    interface IRecentEmojiWeight {

        /** RecentEmojiWeight emoji */
        emoji?: (string|null);

        /** RecentEmojiWeight weight */
        weight?: (number|null);
    }

    /** Represents a RecentEmojiWeight. */
    class RecentEmojiWeight implements IRecentEmojiWeight {

        /**
         * Constructs a new RecentEmojiWeight.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRecentEmojiWeight);

        /** RecentEmojiWeight emoji. */
        public emoji: string;

        /** RecentEmojiWeight weight. */
        public weight: number;

        /**
         * Creates a new RecentEmojiWeight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecentEmojiWeight instance
         */
        public static create(properties?: proto.IRecentEmojiWeight): proto.RecentEmojiWeight;

        /**
         * Encodes the specified RecentEmojiWeight message. Does not implicitly {@link proto.RecentEmojiWeight.verify|verify} messages.
         * @param message RecentEmojiWeight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRecentEmojiWeight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecentEmojiWeight message, length delimited. Does not implicitly {@link proto.RecentEmojiWeight.verify|verify} messages.
         * @param message RecentEmojiWeight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRecentEmojiWeight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecentEmojiWeight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecentEmojiWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RecentEmojiWeight;

        /**
         * Decodes a RecentEmojiWeight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecentEmojiWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RecentEmojiWeight;

        /**
         * Verifies a RecentEmojiWeight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecentEmojiWeight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecentEmojiWeight
         */
        public static fromObject(object: { [k: string]: any }): proto.RecentEmojiWeight;

        /**
         * Creates a plain object from a RecentEmojiWeight message. Also converts values to other types if specified.
         * @param message RecentEmojiWeight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RecentEmojiWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecentEmojiWeight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RecentStickerWeight. */
    interface IRecentStickerWeight {

        /** RecentStickerWeight filehash */
        filehash?: (string|null);

        /** RecentStickerWeight weight */
        weight?: (number|null);
    }

    /** Represents a RecentStickerWeight. */
    class RecentStickerWeight implements IRecentStickerWeight {

        /**
         * Constructs a new RecentStickerWeight.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRecentStickerWeight);

        /** RecentStickerWeight filehash. */
        public filehash: string;

        /** RecentStickerWeight weight. */
        public weight: number;

        /**
         * Creates a new RecentStickerWeight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecentStickerWeight instance
         */
        public static create(properties?: proto.IRecentStickerWeight): proto.RecentStickerWeight;

        /**
         * Encodes the specified RecentStickerWeight message. Does not implicitly {@link proto.RecentStickerWeight.verify|verify} messages.
         * @param message RecentStickerWeight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRecentStickerWeight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecentStickerWeight message, length delimited. Does not implicitly {@link proto.RecentStickerWeight.verify|verify} messages.
         * @param message RecentStickerWeight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRecentStickerWeight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecentStickerWeight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecentStickerWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RecentStickerWeight;

        /**
         * Decodes a RecentStickerWeight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RecentStickerWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RecentStickerWeight;

        /**
         * Verifies a RecentStickerWeight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecentStickerWeight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecentStickerWeight
         */
        public static fromObject(object: { [k: string]: any }): proto.RecentStickerWeight;

        /**
         * Creates a plain object from a RecentStickerWeight message. Also converts values to other types if specified.
         * @param message RecentStickerWeight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RecentStickerWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecentStickerWeight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdPatch. */
    interface ISyncdPatch {

        /** SyncdPatch version */
        version?: (proto.ISyncdVersion|null);

        /** SyncdPatch mutations */
        mutations?: (proto.ISyncdMutation[]|null);

        /** SyncdPatch externalMutations */
        externalMutations?: (proto.IExternalBlobReference|null);

        /** SyncdPatch snapshotMac */
        snapshotMac?: (Uint8Array|null);

        /** SyncdPatch patchMac */
        patchMac?: (Uint8Array|null);

        /** SyncdPatch keyId */
        keyId?: (proto.IKeyId|null);

        /** SyncdPatch exitCode */
        exitCode?: (proto.IExitCode|null);

        /** SyncdPatch deviceIndex */
        deviceIndex?: (number|null);
    }

    /** Represents a SyncdPatch. */
    class SyncdPatch implements ISyncdPatch {

        /**
         * Constructs a new SyncdPatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdPatch);

        /** SyncdPatch version. */
        public version?: (proto.ISyncdVersion|null);

        /** SyncdPatch mutations. */
        public mutations: proto.ISyncdMutation[];

        /** SyncdPatch externalMutations. */
        public externalMutations?: (proto.IExternalBlobReference|null);

        /** SyncdPatch snapshotMac. */
        public snapshotMac: Uint8Array;

        /** SyncdPatch patchMac. */
        public patchMac: Uint8Array;

        /** SyncdPatch keyId. */
        public keyId?: (proto.IKeyId|null);

        /** SyncdPatch exitCode. */
        public exitCode?: (proto.IExitCode|null);

        /** SyncdPatch deviceIndex. */
        public deviceIndex: number;

        /**
         * Creates a new SyncdPatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdPatch instance
         */
        public static create(properties?: proto.ISyncdPatch): proto.SyncdPatch;

        /**
         * Encodes the specified SyncdPatch message. Does not implicitly {@link proto.SyncdPatch.verify|verify} messages.
         * @param message SyncdPatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdPatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdPatch message, length delimited. Does not implicitly {@link proto.SyncdPatch.verify|verify} messages.
         * @param message SyncdPatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdPatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdPatch;

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdPatch;

        /**
         * Verifies a SyncdPatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdPatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdPatch
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdPatch;

        /**
         * Creates a plain object from a SyncdPatch message. Also converts values to other types if specified.
         * @param message SyncdPatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdPatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdPatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdMutation. */
    interface ISyncdMutation {

        /** SyncdMutation operation */
        operation?: (proto.SyncdMutation.SyncdMutationSyncdOperation|null);

        /** SyncdMutation record */
        record?: (proto.ISyncdRecord|null);
    }

    /** Represents a SyncdMutation. */
    class SyncdMutation implements ISyncdMutation {

        /**
         * Constructs a new SyncdMutation.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdMutation);

        /** SyncdMutation operation. */
        public operation: proto.SyncdMutation.SyncdMutationSyncdOperation;

        /** SyncdMutation record. */
        public record?: (proto.ISyncdRecord|null);

        /**
         * Creates a new SyncdMutation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdMutation instance
         */
        public static create(properties?: proto.ISyncdMutation): proto.SyncdMutation;

        /**
         * Encodes the specified SyncdMutation message. Does not implicitly {@link proto.SyncdMutation.verify|verify} messages.
         * @param message SyncdMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdMutation message, length delimited. Does not implicitly {@link proto.SyncdMutation.verify|verify} messages.
         * @param message SyncdMutation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdMutation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdMutation;

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdMutation;

        /**
         * Verifies a SyncdMutation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdMutation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdMutation
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdMutation;

        /**
         * Creates a plain object from a SyncdMutation message. Also converts values to other types if specified.
         * @param message SyncdMutation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdMutation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SyncdMutation {

        /** SyncdMutationSyncdOperation enum. */
        enum SyncdMutationSyncdOperation {
            SET = 0,
            REMOVE = 1
        }
    }

    /** Properties of a SyncdMutations. */
    interface ISyncdMutations {

        /** SyncdMutations mutations */
        mutations?: (proto.ISyncdMutation[]|null);
    }

    /** Represents a SyncdMutations. */
    class SyncdMutations implements ISyncdMutations {

        /**
         * Constructs a new SyncdMutations.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdMutations);

        /** SyncdMutations mutations. */
        public mutations: proto.ISyncdMutation[];

        /**
         * Creates a new SyncdMutations instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdMutations instance
         */
        public static create(properties?: proto.ISyncdMutations): proto.SyncdMutations;

        /**
         * Encodes the specified SyncdMutations message. Does not implicitly {@link proto.SyncdMutations.verify|verify} messages.
         * @param message SyncdMutations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdMutations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdMutations message, length delimited. Does not implicitly {@link proto.SyncdMutations.verify|verify} messages.
         * @param message SyncdMutations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdMutations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdMutations;

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdMutations;

        /**
         * Verifies a SyncdMutations message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdMutations message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdMutations
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdMutations;

        /**
         * Creates a plain object from a SyncdMutations message. Also converts values to other types if specified.
         * @param message SyncdMutations
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdMutations, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdMutations to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdSnapshot. */
    interface ISyncdSnapshot {

        /** SyncdSnapshot version */
        version?: (proto.ISyncdVersion|null);

        /** SyncdSnapshot records */
        records?: (proto.ISyncdRecord[]|null);

        /** SyncdSnapshot mac */
        mac?: (Uint8Array|null);

        /** SyncdSnapshot keyId */
        keyId?: (proto.IKeyId|null);
    }

    /** Represents a SyncdSnapshot. */
    class SyncdSnapshot implements ISyncdSnapshot {

        /**
         * Constructs a new SyncdSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdSnapshot);

        /** SyncdSnapshot version. */
        public version?: (proto.ISyncdVersion|null);

        /** SyncdSnapshot records. */
        public records: proto.ISyncdRecord[];

        /** SyncdSnapshot mac. */
        public mac: Uint8Array;

        /** SyncdSnapshot keyId. */
        public keyId?: (proto.IKeyId|null);

        /**
         * Creates a new SyncdSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdSnapshot instance
         */
        public static create(properties?: proto.ISyncdSnapshot): proto.SyncdSnapshot;

        /**
         * Encodes the specified SyncdSnapshot message. Does not implicitly {@link proto.SyncdSnapshot.verify|verify} messages.
         * @param message SyncdSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdSnapshot message, length delimited. Does not implicitly {@link proto.SyncdSnapshot.verify|verify} messages.
         * @param message SyncdSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdSnapshot;

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdSnapshot;

        /**
         * Verifies a SyncdSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdSnapshot
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdSnapshot;

        /**
         * Creates a plain object from a SyncdSnapshot message. Also converts values to other types if specified.
         * @param message SyncdSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExternalBlobReference. */
    interface IExternalBlobReference {

        /** ExternalBlobReference mediaKey */
        mediaKey?: (Uint8Array|null);

        /** ExternalBlobReference directPath */
        directPath?: (string|null);

        /** ExternalBlobReference handle */
        handle?: (string|null);

        /** ExternalBlobReference fileSizeBytes */
        fileSizeBytes?: (number|Long|null);

        /** ExternalBlobReference fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** ExternalBlobReference fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);
    }

    /** Represents an ExternalBlobReference. */
    class ExternalBlobReference implements IExternalBlobReference {

        /**
         * Constructs a new ExternalBlobReference.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IExternalBlobReference);

        /** ExternalBlobReference mediaKey. */
        public mediaKey: Uint8Array;

        /** ExternalBlobReference directPath. */
        public directPath: string;

        /** ExternalBlobReference handle. */
        public handle: string;

        /** ExternalBlobReference fileSizeBytes. */
        public fileSizeBytes: (number|Long);

        /** ExternalBlobReference fileSha256. */
        public fileSha256: Uint8Array;

        /** ExternalBlobReference fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /**
         * Creates a new ExternalBlobReference instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExternalBlobReference instance
         */
        public static create(properties?: proto.IExternalBlobReference): proto.ExternalBlobReference;

        /**
         * Encodes the specified ExternalBlobReference message. Does not implicitly {@link proto.ExternalBlobReference.verify|verify} messages.
         * @param message ExternalBlobReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IExternalBlobReference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExternalBlobReference message, length delimited. Does not implicitly {@link proto.ExternalBlobReference.verify|verify} messages.
         * @param message ExternalBlobReference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IExternalBlobReference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ExternalBlobReference;

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ExternalBlobReference;

        /**
         * Verifies an ExternalBlobReference message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExternalBlobReference message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExternalBlobReference
         */
        public static fromObject(object: { [k: string]: any }): proto.ExternalBlobReference;

        /**
         * Creates a plain object from an ExternalBlobReference message. Also converts values to other types if specified.
         * @param message ExternalBlobReference
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ExternalBlobReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExternalBlobReference to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdRecord. */
    interface ISyncdRecord {

        /** SyncdRecord index */
        index?: (proto.ISyncdIndex|null);

        /** SyncdRecord value */
        value?: (proto.ISyncdValue|null);

        /** SyncdRecord keyId */
        keyId?: (proto.IKeyId|null);
    }

    /** Represents a SyncdRecord. */
    class SyncdRecord implements ISyncdRecord {

        /**
         * Constructs a new SyncdRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdRecord);

        /** SyncdRecord index. */
        public index?: (proto.ISyncdIndex|null);

        /** SyncdRecord value. */
        public value?: (proto.ISyncdValue|null);

        /** SyncdRecord keyId. */
        public keyId?: (proto.IKeyId|null);

        /**
         * Creates a new SyncdRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdRecord instance
         */
        public static create(properties?: proto.ISyncdRecord): proto.SyncdRecord;

        /**
         * Encodes the specified SyncdRecord message. Does not implicitly {@link proto.SyncdRecord.verify|verify} messages.
         * @param message SyncdRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdRecord message, length delimited. Does not implicitly {@link proto.SyncdRecord.verify|verify} messages.
         * @param message SyncdRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdRecord;

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdRecord;

        /**
         * Verifies a SyncdRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdRecord
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdRecord;

        /**
         * Creates a plain object from a SyncdRecord message. Also converts values to other types if specified.
         * @param message SyncdRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeyId. */
    interface IKeyId {

        /** KeyId id */
        id?: (Uint8Array|null);
    }

    /** Represents a KeyId. */
    class KeyId implements IKeyId {

        /**
         * Constructs a new KeyId.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IKeyId);

        /** KeyId id. */
        public id: Uint8Array;

        /**
         * Creates a new KeyId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyId instance
         */
        public static create(properties?: proto.IKeyId): proto.KeyId;

        /**
         * Encodes the specified KeyId message. Does not implicitly {@link proto.KeyId.verify|verify} messages.
         * @param message KeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyId message, length delimited. Does not implicitly {@link proto.KeyId.verify|verify} messages.
         * @param message KeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.KeyId;

        /**
         * Decodes a KeyId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.KeyId;

        /**
         * Verifies a KeyId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyId
         */
        public static fromObject(object: { [k: string]: any }): proto.KeyId;

        /**
         * Creates a plain object from a KeyId message. Also converts values to other types if specified.
         * @param message KeyId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.KeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdValue. */
    interface ISyncdValue {

        /** SyncdValue blob */
        blob?: (Uint8Array|null);
    }

    /** Represents a SyncdValue. */
    class SyncdValue implements ISyncdValue {

        /**
         * Constructs a new SyncdValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdValue);

        /** SyncdValue blob. */
        public blob: Uint8Array;

        /**
         * Creates a new SyncdValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdValue instance
         */
        public static create(properties?: proto.ISyncdValue): proto.SyncdValue;

        /**
         * Encodes the specified SyncdValue message. Does not implicitly {@link proto.SyncdValue.verify|verify} messages.
         * @param message SyncdValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdValue message, length delimited. Does not implicitly {@link proto.SyncdValue.verify|verify} messages.
         * @param message SyncdValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdValue;

        /**
         * Decodes a SyncdValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdValue;

        /**
         * Verifies a SyncdValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdValue
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdValue;

        /**
         * Creates a plain object from a SyncdValue message. Also converts values to other types if specified.
         * @param message SyncdValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdIndex. */
    interface ISyncdIndex {

        /** SyncdIndex blob */
        blob?: (Uint8Array|null);
    }

    /** Represents a SyncdIndex. */
    class SyncdIndex implements ISyncdIndex {

        /**
         * Constructs a new SyncdIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdIndex);

        /** SyncdIndex blob. */
        public blob: Uint8Array;

        /**
         * Creates a new SyncdIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdIndex instance
         */
        public static create(properties?: proto.ISyncdIndex): proto.SyncdIndex;

        /**
         * Encodes the specified SyncdIndex message. Does not implicitly {@link proto.SyncdIndex.verify|verify} messages.
         * @param message SyncdIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdIndex message, length delimited. Does not implicitly {@link proto.SyncdIndex.verify|verify} messages.
         * @param message SyncdIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdIndex;

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdIndex;

        /**
         * Verifies a SyncdIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdIndex
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdIndex;

        /**
         * Creates a plain object from a SyncdIndex message. Also converts values to other types if specified.
         * @param message SyncdIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitCode. */
    interface IExitCode {

        /** ExitCode code */
        code?: (number|Long|null);

        /** ExitCode text */
        text?: (string|null);
    }

    /** Represents an ExitCode. */
    class ExitCode implements IExitCode {

        /**
         * Constructs a new ExitCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IExitCode);

        /** ExitCode code. */
        public code: (number|Long);

        /** ExitCode text. */
        public text: string;

        /**
         * Creates a new ExitCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitCode instance
         */
        public static create(properties?: proto.IExitCode): proto.ExitCode;

        /**
         * Encodes the specified ExitCode message. Does not implicitly {@link proto.ExitCode.verify|verify} messages.
         * @param message ExitCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IExitCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitCode message, length delimited. Does not implicitly {@link proto.ExitCode.verify|verify} messages.
         * @param message ExitCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IExitCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ExitCode;

        /**
         * Decodes an ExitCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ExitCode;

        /**
         * Verifies an ExitCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitCode
         */
        public static fromObject(object: { [k: string]: any }): proto.ExitCode;

        /**
         * Creates a plain object from an ExitCode message. Also converts values to other types if specified.
         * @param message ExitCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ExitCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SyncdVersion. */
    interface ISyncdVersion {

        /** SyncdVersion version */
        version?: (number|Long|null);
    }

    /** Represents a SyncdVersion. */
    class SyncdVersion implements ISyncdVersion {

        /**
         * Constructs a new SyncdVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISyncdVersion);

        /** SyncdVersion version. */
        public version: (number|Long);

        /**
         * Creates a new SyncdVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncdVersion instance
         */
        public static create(properties?: proto.ISyncdVersion): proto.SyncdVersion;

        /**
         * Encodes the specified SyncdVersion message. Does not implicitly {@link proto.SyncdVersion.verify|verify} messages.
         * @param message SyncdVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISyncdVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncdVersion message, length delimited. Does not implicitly {@link proto.SyncdVersion.verify|verify} messages.
         * @param message SyncdVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISyncdVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SyncdVersion;

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SyncdVersion;

        /**
         * Verifies a SyncdVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncdVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncdVersion
         */
        public static fromObject(object: { [k: string]: any }): proto.SyncdVersion;

        /**
         * Creates a plain object from a SyncdVersion message. Also converts values to other types if specified.
         * @param message SyncdVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SyncdVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncdVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerErrorReceipt. */
    interface IServerErrorReceipt {

        /** ServerErrorReceipt stanzaId */
        stanzaId?: (string|null);
    }

    /** Represents a ServerErrorReceipt. */
    class ServerErrorReceipt implements IServerErrorReceipt {

        /**
         * Constructs a new ServerErrorReceipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServerErrorReceipt);

        /** ServerErrorReceipt stanzaId. */
        public stanzaId: string;

        /**
         * Creates a new ServerErrorReceipt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerErrorReceipt instance
         */
        public static create(properties?: proto.IServerErrorReceipt): proto.ServerErrorReceipt;

        /**
         * Encodes the specified ServerErrorReceipt message. Does not implicitly {@link proto.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServerErrorReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly {@link proto.ServerErrorReceipt.verify|verify} messages.
         * @param message ServerErrorReceipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServerErrorReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServerErrorReceipt;

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServerErrorReceipt;

        /**
         * Verifies a ServerErrorReceipt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerErrorReceipt
         */
        public static fromObject(object: { [k: string]: any }): proto.ServerErrorReceipt;

        /**
         * Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.
         * @param message ServerErrorReceipt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServerErrorReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerErrorReceipt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MediaRetryNotification. */
    interface IMediaRetryNotification {

        /** MediaRetryNotification stanzaId */
        stanzaId?: (string|null);

        /** MediaRetryNotification directPath */
        directPath?: (string|null);

        /** MediaRetryNotification result */
        result?: (proto.MediaRetryNotification.MediaRetryNotificationResultType|null);
    }

    /** Represents a MediaRetryNotification. */
    class MediaRetryNotification implements IMediaRetryNotification {

        /**
         * Constructs a new MediaRetryNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMediaRetryNotification);

        /** MediaRetryNotification stanzaId. */
        public stanzaId: string;

        /** MediaRetryNotification directPath. */
        public directPath: string;

        /** MediaRetryNotification result. */
        public result: proto.MediaRetryNotification.MediaRetryNotificationResultType;

        /**
         * Creates a new MediaRetryNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MediaRetryNotification instance
         */
        public static create(properties?: proto.IMediaRetryNotification): proto.MediaRetryNotification;

        /**
         * Encodes the specified MediaRetryNotification message. Does not implicitly {@link proto.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMediaRetryNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly {@link proto.MediaRetryNotification.verify|verify} messages.
         * @param message MediaRetryNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMediaRetryNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MediaRetryNotification;

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MediaRetryNotification;

        /**
         * Verifies a MediaRetryNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MediaRetryNotification
         */
        public static fromObject(object: { [k: string]: any }): proto.MediaRetryNotification;

        /**
         * Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.
         * @param message MediaRetryNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MediaRetryNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MediaRetryNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MediaRetryNotification {

        /** MediaRetryNotificationResultType enum. */
        enum MediaRetryNotificationResultType {
            GENERAL_ERROR = 0,
            SUCCESS = 1,
            NOT_FOUND = 2,
            DECRYPTION_ERROR = 3
        }
    }

    /** Properties of a MsgOpaqueData. */
    interface IMsgOpaqueData {

        /** MsgOpaqueData body */
        body?: (string|null);

        /** MsgOpaqueData caption */
        caption?: (string|null);

        /** MsgOpaqueData clientUrl */
        clientUrl?: (string|null);

        /** MsgOpaqueData lng */
        lng?: (number|null);

        /** MsgOpaqueData lat */
        lat?: (number|null);

        /** MsgOpaqueData paymentAmount1000 */
        paymentAmount1000?: (number|null);

        /** MsgOpaqueData paymentNoteMsgBody */
        paymentNoteMsgBody?: (string|null);

        /** MsgOpaqueData canonicalUrl */
        canonicalUrl?: (string|null);

        /** MsgOpaqueData matchedText */
        matchedText?: (string|null);

        /** MsgOpaqueData title */
        title?: (string|null);

        /** MsgOpaqueData description */
        description?: (string|null);
    }

    /** Represents a MsgOpaqueData. */
    class MsgOpaqueData implements IMsgOpaqueData {

        /**
         * Constructs a new MsgOpaqueData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMsgOpaqueData);

        /** MsgOpaqueData body. */
        public body: string;

        /** MsgOpaqueData caption. */
        public caption: string;

        /** MsgOpaqueData clientUrl. */
        public clientUrl: string;

        /** MsgOpaqueData lng. */
        public lng: number;

        /** MsgOpaqueData lat. */
        public lat: number;

        /** MsgOpaqueData paymentAmount1000. */
        public paymentAmount1000: number;

        /** MsgOpaqueData paymentNoteMsgBody. */
        public paymentNoteMsgBody: string;

        /** MsgOpaqueData canonicalUrl. */
        public canonicalUrl: string;

        /** MsgOpaqueData matchedText. */
        public matchedText: string;

        /** MsgOpaqueData title. */
        public title: string;

        /** MsgOpaqueData description. */
        public description: string;

        /**
         * Creates a new MsgOpaqueData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgOpaqueData instance
         */
        public static create(properties?: proto.IMsgOpaqueData): proto.MsgOpaqueData;

        /**
         * Encodes the specified MsgOpaqueData message. Does not implicitly {@link proto.MsgOpaqueData.verify|verify} messages.
         * @param message MsgOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMsgOpaqueData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgOpaqueData message, length delimited. Does not implicitly {@link proto.MsgOpaqueData.verify|verify} messages.
         * @param message MsgOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMsgOpaqueData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgOpaqueData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MsgOpaqueData;

        /**
         * Decodes a MsgOpaqueData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MsgOpaqueData;

        /**
         * Verifies a MsgOpaqueData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgOpaqueData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgOpaqueData
         */
        public static fromObject(object: { [k: string]: any }): proto.MsgOpaqueData;

        /**
         * Creates a plain object from a MsgOpaqueData message. Also converts values to other types if specified.
         * @param message MsgOpaqueData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MsgOpaqueData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgOpaqueData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgRowOpaqueData. */
    interface IMsgRowOpaqueData {

        /** MsgRowOpaqueData currentMsg */
        currentMsg?: (proto.IMsgOpaqueData|null);

        /** MsgRowOpaqueData quotedMsg */
        quotedMsg?: (proto.IMsgOpaqueData|null);
    }

    /** Represents a MsgRowOpaqueData. */
    class MsgRowOpaqueData implements IMsgRowOpaqueData {

        /**
         * Constructs a new MsgRowOpaqueData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMsgRowOpaqueData);

        /** MsgRowOpaqueData currentMsg. */
        public currentMsg?: (proto.IMsgOpaqueData|null);

        /** MsgRowOpaqueData quotedMsg. */
        public quotedMsg?: (proto.IMsgOpaqueData|null);

        /**
         * Creates a new MsgRowOpaqueData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgRowOpaqueData instance
         */
        public static create(properties?: proto.IMsgRowOpaqueData): proto.MsgRowOpaqueData;

        /**
         * Encodes the specified MsgRowOpaqueData message. Does not implicitly {@link proto.MsgRowOpaqueData.verify|verify} messages.
         * @param message MsgRowOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMsgRowOpaqueData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgRowOpaqueData message, length delimited. Does not implicitly {@link proto.MsgRowOpaqueData.verify|verify} messages.
         * @param message MsgRowOpaqueData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMsgRowOpaqueData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgRowOpaqueData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MsgRowOpaqueData;

        /**
         * Decodes a MsgRowOpaqueData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MsgRowOpaqueData;

        /**
         * Verifies a MsgRowOpaqueData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgRowOpaqueData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgRowOpaqueData
         */
        public static fromObject(object: { [k: string]: any }): proto.MsgRowOpaqueData;

        /**
         * Creates a plain object from a MsgRowOpaqueData message. Also converts values to other types if specified.
         * @param message MsgRowOpaqueData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MsgRowOpaqueData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgRowOpaqueData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pushname. */
    interface IPushname {

        /** Pushname id */
        id?: (string|null);

        /** Pushname pushname */
        pushname?: (string|null);
    }

    /** Represents a Pushname. */
    class Pushname implements IPushname {

        /**
         * Constructs a new Pushname.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPushname);

        /** Pushname id. */
        public id: string;

        /** Pushname pushname. */
        public pushname: string;

        /**
         * Creates a new Pushname instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pushname instance
         */
        public static create(properties?: proto.IPushname): proto.Pushname;

        /**
         * Encodes the specified Pushname message. Does not implicitly {@link proto.Pushname.verify|verify} messages.
         * @param message Pushname message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPushname, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pushname message, length delimited. Does not implicitly {@link proto.Pushname.verify|verify} messages.
         * @param message Pushname message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPushname, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pushname message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pushname
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Pushname;

        /**
         * Decodes a Pushname message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pushname
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Pushname;

        /**
         * Verifies a Pushname message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pushname message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pushname
         */
        public static fromObject(object: { [k: string]: any }): proto.Pushname;

        /**
         * Creates a plain object from a Pushname message. Also converts values to other types if specified.
         * @param message Pushname
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Pushname, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pushname to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistorySyncMsg. */
    interface IHistorySyncMsg {

        /** HistorySyncMsg message */
        message?: (proto.IWebMessageInfo|null);

        /** HistorySyncMsg msgOrderId */
        msgOrderId?: (number|Long|null);
    }

    /** Represents a HistorySyncMsg. */
    class HistorySyncMsg implements IHistorySyncMsg {

        /**
         * Constructs a new HistorySyncMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHistorySyncMsg);

        /** HistorySyncMsg message. */
        public message?: (proto.IWebMessageInfo|null);

        /** HistorySyncMsg msgOrderId. */
        public msgOrderId: (number|Long);

        /**
         * Creates a new HistorySyncMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistorySyncMsg instance
         */
        public static create(properties?: proto.IHistorySyncMsg): proto.HistorySyncMsg;

        /**
         * Encodes the specified HistorySyncMsg message. Does not implicitly {@link proto.HistorySyncMsg.verify|verify} messages.
         * @param message HistorySyncMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHistorySyncMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistorySyncMsg message, length delimited. Does not implicitly {@link proto.HistorySyncMsg.verify|verify} messages.
         * @param message HistorySyncMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHistorySyncMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistorySyncMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistorySyncMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HistorySyncMsg;

        /**
         * Decodes a HistorySyncMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistorySyncMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HistorySyncMsg;

        /**
         * Verifies a HistorySyncMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistorySyncMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistorySyncMsg
         */
        public static fromObject(object: { [k: string]: any }): proto.HistorySyncMsg;

        /**
         * Creates a plain object from a HistorySyncMsg message. Also converts values to other types if specified.
         * @param message HistorySyncMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HistorySyncMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistorySyncMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Conversation. */
    interface IConversation {

        /** Conversation id */
        id: string;

        /** Conversation messages */
        messages?: (proto.IHistorySyncMsg[]|null);

        /** Conversation newJid */
        newJid?: (string|null);

        /** Conversation oldJid */
        oldJid?: (string|null);

        /** Conversation lastMsgTimestamp */
        lastMsgTimestamp?: (number|Long|null);

        /** Conversation unreadCount */
        unreadCount?: (number|null);

        /** Conversation readOnly */
        readOnly?: (boolean|null);

        /** Conversation endOfHistoryTransfer */
        endOfHistoryTransfer?: (boolean|null);

        /** Conversation ephemeralExpiration */
        ephemeralExpiration?: (number|null);

        /** Conversation ephemeralSettingTimestamp */
        ephemeralSettingTimestamp?: (number|Long|null);

        /** Conversation endOfHistoryTransferType */
        endOfHistoryTransferType?: (proto.Conversation.ConversationEndOfHistoryTransferType|null);

        /** Conversation conversationTimestamp */
        conversationTimestamp?: (number|Long|null);

        /** Conversation name */
        name?: (string|null);

        /** Conversation pHash */
        pHash?: (string|null);

        /** Conversation notSpam */
        notSpam?: (boolean|null);
    }

    /** Represents a Conversation. */
    class Conversation implements IConversation {

        /**
         * Constructs a new Conversation.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IConversation);

        /** Conversation id. */
        public id: string;

        /** Conversation messages. */
        public messages: proto.IHistorySyncMsg[];

        /** Conversation newJid. */
        public newJid: string;

        /** Conversation oldJid. */
        public oldJid: string;

        /** Conversation lastMsgTimestamp. */
        public lastMsgTimestamp: (number|Long);

        /** Conversation unreadCount. */
        public unreadCount: number;

        /** Conversation readOnly. */
        public readOnly: boolean;

        /** Conversation endOfHistoryTransfer. */
        public endOfHistoryTransfer: boolean;

        /** Conversation ephemeralExpiration. */
        public ephemeralExpiration: number;

        /** Conversation ephemeralSettingTimestamp. */
        public ephemeralSettingTimestamp: (number|Long);

        /** Conversation endOfHistoryTransferType. */
        public endOfHistoryTransferType: proto.Conversation.ConversationEndOfHistoryTransferType;

        /** Conversation conversationTimestamp. */
        public conversationTimestamp: (number|Long);

        /** Conversation name. */
        public name: string;

        /** Conversation pHash. */
        public pHash: string;

        /** Conversation notSpam. */
        public notSpam: boolean;

        /**
         * Creates a new Conversation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Conversation instance
         */
        public static create(properties?: proto.IConversation): proto.Conversation;

        /**
         * Encodes the specified Conversation message. Does not implicitly {@link proto.Conversation.verify|verify} messages.
         * @param message Conversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Conversation message, length delimited. Does not implicitly {@link proto.Conversation.verify|verify} messages.
         * @param message Conversation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Conversation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Conversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Conversation;

        /**
         * Decodes a Conversation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Conversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Conversation;

        /**
         * Verifies a Conversation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Conversation
         */
        public static fromObject(object: { [k: string]: any }): proto.Conversation;

        /**
         * Creates a plain object from a Conversation message. Also converts values to other types if specified.
         * @param message Conversation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Conversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Conversation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Conversation {

        /** ConversationEndOfHistoryTransferType enum. */
        enum ConversationEndOfHistoryTransferType {
            COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0,
            COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1
        }
    }

    /** Properties of a HistorySync. */
    interface IHistorySync {

        /** HistorySync syncType */
        syncType: proto.HistorySync.HistorySyncHistorySyncType;

        /** HistorySync conversations */
        conversations?: (proto.IConversation[]|null);

        /** HistorySync statusV3Messages */
        statusV3Messages?: (proto.IWebMessageInfo[]|null);

        /** HistorySync chunkOrder */
        chunkOrder?: (number|null);

        /** HistorySync progress */
        progress?: (number|null);

        /** HistorySync pushnames */
        pushnames?: (proto.IPushname[]|null);
    }

    /** Represents a HistorySync. */
    class HistorySync implements IHistorySync {

        /**
         * Constructs a new HistorySync.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHistorySync);

        /** HistorySync syncType. */
        public syncType: proto.HistorySync.HistorySyncHistorySyncType;

        /** HistorySync conversations. */
        public conversations: proto.IConversation[];

        /** HistorySync statusV3Messages. */
        public statusV3Messages: proto.IWebMessageInfo[];

        /** HistorySync chunkOrder. */
        public chunkOrder: number;

        /** HistorySync progress. */
        public progress: number;

        /** HistorySync pushnames. */
        public pushnames: proto.IPushname[];

        /**
         * Creates a new HistorySync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistorySync instance
         */
        public static create(properties?: proto.IHistorySync): proto.HistorySync;

        /**
         * Encodes the specified HistorySync message. Does not implicitly {@link proto.HistorySync.verify|verify} messages.
         * @param message HistorySync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHistorySync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistorySync message, length delimited. Does not implicitly {@link proto.HistorySync.verify|verify} messages.
         * @param message HistorySync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHistorySync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistorySync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistorySync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HistorySync;

        /**
         * Decodes a HistorySync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistorySync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HistorySync;

        /**
         * Verifies a HistorySync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistorySync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistorySync
         */
        public static fromObject(object: { [k: string]: any }): proto.HistorySync;

        /**
         * Creates a plain object from a HistorySync message. Also converts values to other types if specified.
         * @param message HistorySync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HistorySync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistorySync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace HistorySync {

        /** HistorySyncHistorySyncType enum. */
        enum HistorySyncHistorySyncType {
            INITIAL_BOOTSTRAP = 0,
            INITIAL_STATUS_V3 = 1,
            FULL = 2,
            RECENT = 3,
            PUSH_NAME = 4
        }
    }

    /** Properties of an EphemeralSetting. */
    interface IEphemeralSetting {

        /** EphemeralSetting duration */
        duration?: (number|null);

        /** EphemeralSetting timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents an EphemeralSetting. */
    class EphemeralSetting implements IEphemeralSetting {

        /**
         * Constructs a new EphemeralSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IEphemeralSetting);

        /** EphemeralSetting duration. */
        public duration: number;

        /** EphemeralSetting timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new EphemeralSetting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EphemeralSetting instance
         */
        public static create(properties?: proto.IEphemeralSetting): proto.EphemeralSetting;

        /**
         * Encodes the specified EphemeralSetting message. Does not implicitly {@link proto.EphemeralSetting.verify|verify} messages.
         * @param message EphemeralSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IEphemeralSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EphemeralSetting message, length delimited. Does not implicitly {@link proto.EphemeralSetting.verify|verify} messages.
         * @param message EphemeralSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IEphemeralSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.EphemeralSetting;

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.EphemeralSetting;

        /**
         * Verifies an EphemeralSetting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EphemeralSetting message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EphemeralSetting
         */
        public static fromObject(object: { [k: string]: any }): proto.EphemeralSetting;

        /**
         * Creates a plain object from an EphemeralSetting message. Also converts values to other types if specified.
         * @param message EphemeralSetting
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.EphemeralSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EphemeralSetting to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaymentBackground. */
    interface IPaymentBackground {

        /** PaymentBackground id */
        id?: (string|null);

        /** PaymentBackground fileLength */
        fileLength?: (string|null);

        /** PaymentBackground width */
        width?: (number|null);

        /** PaymentBackground height */
        height?: (number|null);

        /** PaymentBackground mimetype */
        mimetype?: (string|null);

        /** PaymentBackground placeholderArgb */
        placeholderArgb?: (number|null);

        /** PaymentBackground textArgb */
        textArgb?: (number|null);

        /** PaymentBackground subtextArgb */
        subtextArgb?: (number|null);
    }

    /** Represents a PaymentBackground. */
    class PaymentBackground implements IPaymentBackground {

        /**
         * Constructs a new PaymentBackground.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPaymentBackground);

        /** PaymentBackground id. */
        public id: string;

        /** PaymentBackground fileLength. */
        public fileLength: string;

        /** PaymentBackground width. */
        public width: number;

        /** PaymentBackground height. */
        public height: number;

        /** PaymentBackground mimetype. */
        public mimetype: string;

        /** PaymentBackground placeholderArgb. */
        public placeholderArgb: number;

        /** PaymentBackground textArgb. */
        public textArgb: number;

        /** PaymentBackground subtextArgb. */
        public subtextArgb: number;

        /**
         * Creates a new PaymentBackground instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymentBackground instance
         */
        public static create(properties?: proto.IPaymentBackground): proto.PaymentBackground;

        /**
         * Encodes the specified PaymentBackground message. Does not implicitly {@link proto.PaymentBackground.verify|verify} messages.
         * @param message PaymentBackground message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPaymentBackground, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymentBackground message, length delimited. Does not implicitly {@link proto.PaymentBackground.verify|verify} messages.
         * @param message PaymentBackground message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPaymentBackground, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymentBackground message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymentBackground
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PaymentBackground;

        /**
         * Decodes a PaymentBackground message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymentBackground
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PaymentBackground;

        /**
         * Verifies a PaymentBackground message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymentBackground message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymentBackground
         */
        public static fromObject(object: { [k: string]: any }): proto.PaymentBackground;

        /**
         * Creates a plain object from a PaymentBackground message. Also converts values to other types if specified.
         * @param message PaymentBackground
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PaymentBackground, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymentBackground to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Money. */
    interface IMoney {

        /** Money value */
        value?: (number|Long|null);

        /** Money offset */
        offset?: (number|null);

        /** Money currencyCode */
        currencyCode?: (string|null);
    }

    /** Represents a Money. */
    class Money implements IMoney {

        /**
         * Constructs a new Money.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMoney);

        /** Money value. */
        public value: (number|Long);

        /** Money offset. */
        public offset: number;

        /** Money currencyCode. */
        public currencyCode: string;

        /**
         * Creates a new Money instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Money instance
         */
        public static create(properties?: proto.IMoney): proto.Money;

        /**
         * Encodes the specified Money message. Does not implicitly {@link proto.Money.verify|verify} messages.
         * @param message Money message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Money message, length delimited. Does not implicitly {@link proto.Money.verify|verify} messages.
         * @param message Money message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Money message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Money
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Money;

        /**
         * Decodes a Money message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Money
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Money;

        /**
         * Verifies a Money message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Money message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Money
         */
        public static fromObject(object: { [k: string]: any }): proto.Money;

        /**
         * Creates a plain object from a Money message. Also converts values to other types if specified.
         * @param message Money
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Money to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HydratedQuickReplyButton. */
    interface IHydratedQuickReplyButton {

        /** HydratedQuickReplyButton displayText */
        displayText?: (string|null);

        /** HydratedQuickReplyButton id */
        id?: (string|null);
    }

    /** Represents a HydratedQuickReplyButton. */
    class HydratedQuickReplyButton implements IHydratedQuickReplyButton {

        /**
         * Constructs a new HydratedQuickReplyButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHydratedQuickReplyButton);

        /** HydratedQuickReplyButton displayText. */
        public displayText: string;

        /** HydratedQuickReplyButton id. */
        public id: string;

        /**
         * Creates a new HydratedQuickReplyButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HydratedQuickReplyButton instance
         */
        public static create(properties?: proto.IHydratedQuickReplyButton): proto.HydratedQuickReplyButton;

        /**
         * Encodes the specified HydratedQuickReplyButton message. Does not implicitly {@link proto.HydratedQuickReplyButton.verify|verify} messages.
         * @param message HydratedQuickReplyButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHydratedQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HydratedQuickReplyButton message, length delimited. Does not implicitly {@link proto.HydratedQuickReplyButton.verify|verify} messages.
         * @param message HydratedQuickReplyButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHydratedQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HydratedQuickReplyButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HydratedQuickReplyButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HydratedQuickReplyButton;

        /**
         * Decodes a HydratedQuickReplyButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HydratedQuickReplyButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HydratedQuickReplyButton;

        /**
         * Verifies a HydratedQuickReplyButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HydratedQuickReplyButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HydratedQuickReplyButton
         */
        public static fromObject(object: { [k: string]: any }): proto.HydratedQuickReplyButton;

        /**
         * Creates a plain object from a HydratedQuickReplyButton message. Also converts values to other types if specified.
         * @param message HydratedQuickReplyButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HydratedQuickReplyButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HydratedQuickReplyButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HydratedURLButton. */
    interface IHydratedURLButton {

        /** HydratedURLButton displayText */
        displayText?: (string|null);

        /** HydratedURLButton url */
        url?: (string|null);
    }

    /** Represents a HydratedURLButton. */
    class HydratedURLButton implements IHydratedURLButton {

        /**
         * Constructs a new HydratedURLButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHydratedURLButton);

        /** HydratedURLButton displayText. */
        public displayText: string;

        /** HydratedURLButton url. */
        public url: string;

        /**
         * Creates a new HydratedURLButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HydratedURLButton instance
         */
        public static create(properties?: proto.IHydratedURLButton): proto.HydratedURLButton;

        /**
         * Encodes the specified HydratedURLButton message. Does not implicitly {@link proto.HydratedURLButton.verify|verify} messages.
         * @param message HydratedURLButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHydratedURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HydratedURLButton message, length delimited. Does not implicitly {@link proto.HydratedURLButton.verify|verify} messages.
         * @param message HydratedURLButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHydratedURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HydratedURLButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HydratedURLButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HydratedURLButton;

        /**
         * Decodes a HydratedURLButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HydratedURLButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HydratedURLButton;

        /**
         * Verifies a HydratedURLButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HydratedURLButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HydratedURLButton
         */
        public static fromObject(object: { [k: string]: any }): proto.HydratedURLButton;

        /**
         * Creates a plain object from a HydratedURLButton message. Also converts values to other types if specified.
         * @param message HydratedURLButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HydratedURLButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HydratedURLButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HydratedCallButton. */
    interface IHydratedCallButton {

        /** HydratedCallButton displayText */
        displayText?: (string|null);

        /** HydratedCallButton phoneNumber */
        phoneNumber?: (string|null);
    }

    /** Represents a HydratedCallButton. */
    class HydratedCallButton implements IHydratedCallButton {

        /**
         * Constructs a new HydratedCallButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHydratedCallButton);

        /** HydratedCallButton displayText. */
        public displayText: string;

        /** HydratedCallButton phoneNumber. */
        public phoneNumber: string;

        /**
         * Creates a new HydratedCallButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HydratedCallButton instance
         */
        public static create(properties?: proto.IHydratedCallButton): proto.HydratedCallButton;

        /**
         * Encodes the specified HydratedCallButton message. Does not implicitly {@link proto.HydratedCallButton.verify|verify} messages.
         * @param message HydratedCallButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHydratedCallButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HydratedCallButton message, length delimited. Does not implicitly {@link proto.HydratedCallButton.verify|verify} messages.
         * @param message HydratedCallButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHydratedCallButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HydratedCallButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HydratedCallButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HydratedCallButton;

        /**
         * Decodes a HydratedCallButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HydratedCallButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HydratedCallButton;

        /**
         * Verifies a HydratedCallButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HydratedCallButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HydratedCallButton
         */
        public static fromObject(object: { [k: string]: any }): proto.HydratedCallButton;

        /**
         * Creates a plain object from a HydratedCallButton message. Also converts values to other types if specified.
         * @param message HydratedCallButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HydratedCallButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HydratedCallButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HydratedTemplateButton. */
    interface IHydratedTemplateButton {

        /** HydratedTemplateButton index */
        index?: (number|null);

        /** HydratedTemplateButton quickReplyButton */
        quickReplyButton?: (proto.IHydratedQuickReplyButton|null);

        /** HydratedTemplateButton urlButton */
        urlButton?: (proto.IHydratedURLButton|null);

        /** HydratedTemplateButton callButton */
        callButton?: (proto.IHydratedCallButton|null);
    }

    /** Represents a HydratedTemplateButton. */
    class HydratedTemplateButton implements IHydratedTemplateButton {

        /**
         * Constructs a new HydratedTemplateButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHydratedTemplateButton);

        /** HydratedTemplateButton index. */
        public index: number;

        /** HydratedTemplateButton quickReplyButton. */
        public quickReplyButton?: (proto.IHydratedQuickReplyButton|null);

        /** HydratedTemplateButton urlButton. */
        public urlButton?: (proto.IHydratedURLButton|null);

        /** HydratedTemplateButton callButton. */
        public callButton?: (proto.IHydratedCallButton|null);

        /** HydratedTemplateButton hydratedButton. */
        public hydratedButton?: ("quickReplyButton"|"urlButton"|"callButton");

        /**
         * Creates a new HydratedTemplateButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HydratedTemplateButton instance
         */
        public static create(properties?: proto.IHydratedTemplateButton): proto.HydratedTemplateButton;

        /**
         * Encodes the specified HydratedTemplateButton message. Does not implicitly {@link proto.HydratedTemplateButton.verify|verify} messages.
         * @param message HydratedTemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHydratedTemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HydratedTemplateButton message, length delimited. Does not implicitly {@link proto.HydratedTemplateButton.verify|verify} messages.
         * @param message HydratedTemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHydratedTemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HydratedTemplateButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HydratedTemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HydratedTemplateButton;

        /**
         * Decodes a HydratedTemplateButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HydratedTemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HydratedTemplateButton;

        /**
         * Verifies a HydratedTemplateButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HydratedTemplateButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HydratedTemplateButton
         */
        public static fromObject(object: { [k: string]: any }): proto.HydratedTemplateButton;

        /**
         * Creates a plain object from a HydratedTemplateButton message. Also converts values to other types if specified.
         * @param message HydratedTemplateButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HydratedTemplateButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HydratedTemplateButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuickReplyButton. */
    interface IQuickReplyButton {

        /** QuickReplyButton displayText */
        displayText?: (proto.IHighlyStructuredMessage|null);

        /** QuickReplyButton id */
        id?: (string|null);
    }

    /** Represents a QuickReplyButton. */
    class QuickReplyButton implements IQuickReplyButton {

        /**
         * Constructs a new QuickReplyButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IQuickReplyButton);

        /** QuickReplyButton displayText. */
        public displayText?: (proto.IHighlyStructuredMessage|null);

        /** QuickReplyButton id. */
        public id: string;

        /**
         * Creates a new QuickReplyButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuickReplyButton instance
         */
        public static create(properties?: proto.IQuickReplyButton): proto.QuickReplyButton;

        /**
         * Encodes the specified QuickReplyButton message. Does not implicitly {@link proto.QuickReplyButton.verify|verify} messages.
         * @param message QuickReplyButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuickReplyButton message, length delimited. Does not implicitly {@link proto.QuickReplyButton.verify|verify} messages.
         * @param message QuickReplyButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IQuickReplyButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuickReplyButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuickReplyButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.QuickReplyButton;

        /**
         * Decodes a QuickReplyButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuickReplyButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.QuickReplyButton;

        /**
         * Verifies a QuickReplyButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuickReplyButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuickReplyButton
         */
        public static fromObject(object: { [k: string]: any }): proto.QuickReplyButton;

        /**
         * Creates a plain object from a QuickReplyButton message. Also converts values to other types if specified.
         * @param message QuickReplyButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.QuickReplyButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuickReplyButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a URLButton. */
    interface IURLButton {

        /** URLButton displayText */
        displayText?: (proto.IHighlyStructuredMessage|null);

        /** URLButton url */
        url?: (proto.IHighlyStructuredMessage|null);
    }

    /** Represents a URLButton. */
    class URLButton implements IURLButton {

        /**
         * Constructs a new URLButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IURLButton);

        /** URLButton displayText. */
        public displayText?: (proto.IHighlyStructuredMessage|null);

        /** URLButton url. */
        public url?: (proto.IHighlyStructuredMessage|null);

        /**
         * Creates a new URLButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns URLButton instance
         */
        public static create(properties?: proto.IURLButton): proto.URLButton;

        /**
         * Encodes the specified URLButton message. Does not implicitly {@link proto.URLButton.verify|verify} messages.
         * @param message URLButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified URLButton message, length delimited. Does not implicitly {@link proto.URLButton.verify|verify} messages.
         * @param message URLButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IURLButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a URLButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns URLButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.URLButton;

        /**
         * Decodes a URLButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns URLButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.URLButton;

        /**
         * Verifies a URLButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a URLButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns URLButton
         */
        public static fromObject(object: { [k: string]: any }): proto.URLButton;

        /**
         * Creates a plain object from a URLButton message. Also converts values to other types if specified.
         * @param message URLButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.URLButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this URLButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CallButton. */
    interface ICallButton {

        /** CallButton displayText */
        displayText?: (proto.IHighlyStructuredMessage|null);

        /** CallButton phoneNumber */
        phoneNumber?: (proto.IHighlyStructuredMessage|null);
    }

    /** Represents a CallButton. */
    class CallButton implements ICallButton {

        /**
         * Constructs a new CallButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICallButton);

        /** CallButton displayText. */
        public displayText?: (proto.IHighlyStructuredMessage|null);

        /** CallButton phoneNumber. */
        public phoneNumber?: (proto.IHighlyStructuredMessage|null);

        /**
         * Creates a new CallButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallButton instance
         */
        public static create(properties?: proto.ICallButton): proto.CallButton;

        /**
         * Encodes the specified CallButton message. Does not implicitly {@link proto.CallButton.verify|verify} messages.
         * @param message CallButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICallButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallButton message, length delimited. Does not implicitly {@link proto.CallButton.verify|verify} messages.
         * @param message CallButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICallButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CallButton;

        /**
         * Decodes a CallButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CallButton;

        /**
         * Verifies a CallButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallButton
         */
        public static fromObject(object: { [k: string]: any }): proto.CallButton;

        /**
         * Creates a plain object from a CallButton message. Also converts values to other types if specified.
         * @param message CallButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CallButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TemplateButton. */
    interface ITemplateButton {

        /** TemplateButton index */
        index?: (number|null);

        /** TemplateButton quickReplyButton */
        quickReplyButton?: (proto.IQuickReplyButton|null);

        /** TemplateButton urlButton */
        urlButton?: (proto.IURLButton|null);

        /** TemplateButton callButton */
        callButton?: (proto.ICallButton|null);
    }

    /** Represents a TemplateButton. */
    class TemplateButton implements ITemplateButton {

        /**
         * Constructs a new TemplateButton.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITemplateButton);

        /** TemplateButton index. */
        public index: number;

        /** TemplateButton quickReplyButton. */
        public quickReplyButton?: (proto.IQuickReplyButton|null);

        /** TemplateButton urlButton. */
        public urlButton?: (proto.IURLButton|null);

        /** TemplateButton callButton. */
        public callButton?: (proto.ICallButton|null);

        /** TemplateButton button. */
        public button?: ("quickReplyButton"|"urlButton"|"callButton");

        /**
         * Creates a new TemplateButton instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateButton instance
         */
        public static create(properties?: proto.ITemplateButton): proto.TemplateButton;

        /**
         * Encodes the specified TemplateButton message. Does not implicitly {@link proto.TemplateButton.verify|verify} messages.
         * @param message TemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateButton message, length delimited. Does not implicitly {@link proto.TemplateButton.verify|verify} messages.
         * @param message TemplateButton message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITemplateButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateButton message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TemplateButton;

        /**
         * Decodes a TemplateButton message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TemplateButton
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TemplateButton;

        /**
         * Verifies a TemplateButton message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateButton message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateButton
         */
        public static fromObject(object: { [k: string]: any }): proto.TemplateButton;

        /**
         * Creates a plain object from a TemplateButton message. Also converts values to other types if specified.
         * @param message TemplateButton
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TemplateButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateButton to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Location degreesLatitude */
        degreesLatitude?: (number|null);

        /** Location degreesLongitude */
        degreesLongitude?: (number|null);

        /** Location name */
        name?: (string|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILocation);

        /** Location degreesLatitude. */
        public degreesLatitude: number;

        /** Location degreesLongitude. */
        public degreesLongitude: number;

        /** Location name. */
        public name: string;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: proto.ILocation): proto.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link proto.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link proto.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): proto.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point xDeprecated */
        xDeprecated?: (number|null);

        /** Point yDeprecated */
        yDeprecated?: (number|null);

        /** Point x */
        x?: (number|null);

        /** Point y */
        y?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPoint);

        /** Point xDeprecated. */
        public xDeprecated: number;

        /** Point yDeprecated. */
        public yDeprecated: number;

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: proto.IPoint): proto.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link proto.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link proto.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): proto.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InteractiveAnnotation. */
    interface IInteractiveAnnotation {

        /** InteractiveAnnotation polygonVertices */
        polygonVertices?: (proto.IPoint[]|null);

        /** InteractiveAnnotation location */
        location?: (proto.ILocation|null);
    }

    /** Represents an InteractiveAnnotation. */
    class InteractiveAnnotation implements IInteractiveAnnotation {

        /**
         * Constructs a new InteractiveAnnotation.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IInteractiveAnnotation);

        /** InteractiveAnnotation polygonVertices. */
        public polygonVertices: proto.IPoint[];

        /** InteractiveAnnotation location. */
        public location?: (proto.ILocation|null);

        /** InteractiveAnnotation action. */
        public action?: "location";

        /**
         * Creates a new InteractiveAnnotation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InteractiveAnnotation instance
         */
        public static create(properties?: proto.IInteractiveAnnotation): proto.InteractiveAnnotation;

        /**
         * Encodes the specified InteractiveAnnotation message. Does not implicitly {@link proto.InteractiveAnnotation.verify|verify} messages.
         * @param message InteractiveAnnotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IInteractiveAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InteractiveAnnotation message, length delimited. Does not implicitly {@link proto.InteractiveAnnotation.verify|verify} messages.
         * @param message InteractiveAnnotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IInteractiveAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InteractiveAnnotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InteractiveAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.InteractiveAnnotation;

        /**
         * Decodes an InteractiveAnnotation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InteractiveAnnotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.InteractiveAnnotation;

        /**
         * Verifies an InteractiveAnnotation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InteractiveAnnotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InteractiveAnnotation
         */
        public static fromObject(object: { [k: string]: any }): proto.InteractiveAnnotation;

        /**
         * Creates a plain object from an InteractiveAnnotation message. Also converts values to other types if specified.
         * @param message InteractiveAnnotation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.InteractiveAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InteractiveAnnotation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceListMetadata. */
    interface IDeviceListMetadata {

        /** DeviceListMetadata senderKeyHash */
        senderKeyHash?: (Uint8Array|null);

        /** DeviceListMetadata senderTimestamp */
        senderTimestamp?: (number|Long|null);

        /** DeviceListMetadata senderKeyIndexes */
        senderKeyIndexes?: (number[]|null);

        /** DeviceListMetadata recipientKeyHash */
        recipientKeyHash?: (Uint8Array|null);

        /** DeviceListMetadata recipientTimestamp */
        recipientTimestamp?: (number|Long|null);

        /** DeviceListMetadata recipientKeyIndexes */
        recipientKeyIndexes?: (number[]|null);
    }

    /** Represents a DeviceListMetadata. */
    class DeviceListMetadata implements IDeviceListMetadata {

        /**
         * Constructs a new DeviceListMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDeviceListMetadata);

        /** DeviceListMetadata senderKeyHash. */
        public senderKeyHash: Uint8Array;

        /** DeviceListMetadata senderTimestamp. */
        public senderTimestamp: (number|Long);

        /** DeviceListMetadata senderKeyIndexes. */
        public senderKeyIndexes: number[];

        /** DeviceListMetadata recipientKeyHash. */
        public recipientKeyHash: Uint8Array;

        /** DeviceListMetadata recipientTimestamp. */
        public recipientTimestamp: (number|Long);

        /** DeviceListMetadata recipientKeyIndexes. */
        public recipientKeyIndexes: number[];

        /**
         * Creates a new DeviceListMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceListMetadata instance
         */
        public static create(properties?: proto.IDeviceListMetadata): proto.DeviceListMetadata;

        /**
         * Encodes the specified DeviceListMetadata message. Does not implicitly {@link proto.DeviceListMetadata.verify|verify} messages.
         * @param message DeviceListMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDeviceListMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceListMetadata message, length delimited. Does not implicitly {@link proto.DeviceListMetadata.verify|verify} messages.
         * @param message DeviceListMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDeviceListMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceListMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceListMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DeviceListMetadata;

        /**
         * Decodes a DeviceListMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceListMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DeviceListMetadata;

        /**
         * Verifies a DeviceListMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceListMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceListMetadata
         */
        public static fromObject(object: { [k: string]: any }): proto.DeviceListMetadata;

        /**
         * Creates a plain object from a DeviceListMetadata message. Also converts values to other types if specified.
         * @param message DeviceListMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DeviceListMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceListMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageContextInfo. */
    interface IMessageContextInfo {

        /** MessageContextInfo deviceListMetadata */
        deviceListMetadata?: (proto.IDeviceListMetadata|null);

        /** MessageContextInfo deviceListMetadataVersion */
        deviceListMetadataVersion?: (number|null);
    }

    /** Represents a MessageContextInfo. */
    class MessageContextInfo implements IMessageContextInfo {

        /**
         * Constructs a new MessageContextInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMessageContextInfo);

        /** MessageContextInfo deviceListMetadata. */
        public deviceListMetadata?: (proto.IDeviceListMetadata|null);

        /** MessageContextInfo deviceListMetadataVersion. */
        public deviceListMetadataVersion: number;

        /**
         * Creates a new MessageContextInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageContextInfo instance
         */
        public static create(properties?: proto.IMessageContextInfo): proto.MessageContextInfo;

        /**
         * Encodes the specified MessageContextInfo message. Does not implicitly {@link proto.MessageContextInfo.verify|verify} messages.
         * @param message MessageContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessageContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageContextInfo message, length delimited. Does not implicitly {@link proto.MessageContextInfo.verify|verify} messages.
         * @param message MessageContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessageContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageContextInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MessageContextInfo;

        /**
         * Decodes a MessageContextInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MessageContextInfo;

        /**
         * Verifies a MessageContextInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageContextInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageContextInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.MessageContextInfo;

        /**
         * Creates a plain object from a MessageContextInfo message. Also converts values to other types if specified.
         * @param message MessageContextInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MessageContextInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageContextInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdReplyInfo. */
    interface IAdReplyInfo {

        /** AdReplyInfo advertiserName */
        advertiserName?: (string|null);

        /** AdReplyInfo mediaType */
        mediaType?: (proto.AdReplyInfo.AdReplyInfoMediaType|null);

        /** AdReplyInfo jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** AdReplyInfo caption */
        caption?: (string|null);
    }

    /** Represents an AdReplyInfo. */
    class AdReplyInfo implements IAdReplyInfo {

        /**
         * Constructs a new AdReplyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAdReplyInfo);

        /** AdReplyInfo advertiserName. */
        public advertiserName: string;

        /** AdReplyInfo mediaType. */
        public mediaType: proto.AdReplyInfo.AdReplyInfoMediaType;

        /** AdReplyInfo jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** AdReplyInfo caption. */
        public caption: string;

        /**
         * Creates a new AdReplyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdReplyInfo instance
         */
        public static create(properties?: proto.IAdReplyInfo): proto.AdReplyInfo;

        /**
         * Encodes the specified AdReplyInfo message. Does not implicitly {@link proto.AdReplyInfo.verify|verify} messages.
         * @param message AdReplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdReplyInfo message, length delimited. Does not implicitly {@link proto.AdReplyInfo.verify|verify} messages.
         * @param message AdReplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdReplyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdReplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AdReplyInfo;

        /**
         * Decodes an AdReplyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdReplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AdReplyInfo;

        /**
         * Verifies an AdReplyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdReplyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdReplyInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.AdReplyInfo;

        /**
         * Creates a plain object from an AdReplyInfo message. Also converts values to other types if specified.
         * @param message AdReplyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AdReplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdReplyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace AdReplyInfo {

        /** AdReplyInfoMediaType enum. */
        enum AdReplyInfoMediaType {
            NONE = 0,
            IMAGE = 1,
            VIDEO = 2
        }
    }

    /** Properties of an ExternalAdReplyInfo. */
    interface IExternalAdReplyInfo {

        /** ExternalAdReplyInfo title */
        title?: (string|null);

        /** ExternalAdReplyInfo body */
        body?: (string|null);

        /** ExternalAdReplyInfo mediaType */
        mediaType?: (proto.ExternalAdReplyInfo.ExternalAdReplyInfoMediaType|null);

        /** ExternalAdReplyInfo thumbnailUrl */
        thumbnailUrl?: (string|null);

        /** ExternalAdReplyInfo mediaUrl */
        mediaUrl?: (string|null);

        /** ExternalAdReplyInfo thumbnail */
        thumbnail?: (Uint8Array|null);

        /** ExternalAdReplyInfo sourceType */
        sourceType?: (string|null);

        /** ExternalAdReplyInfo sourceId */
        sourceId?: (string|null);

        /** ExternalAdReplyInfo sourceUrl */
        sourceUrl?: (string|null);
    }

    /** Represents an ExternalAdReplyInfo. */
    class ExternalAdReplyInfo implements IExternalAdReplyInfo {

        /**
         * Constructs a new ExternalAdReplyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IExternalAdReplyInfo);

        /** ExternalAdReplyInfo title. */
        public title: string;

        /** ExternalAdReplyInfo body. */
        public body: string;

        /** ExternalAdReplyInfo mediaType. */
        public mediaType: proto.ExternalAdReplyInfo.ExternalAdReplyInfoMediaType;

        /** ExternalAdReplyInfo thumbnailUrl. */
        public thumbnailUrl: string;

        /** ExternalAdReplyInfo mediaUrl. */
        public mediaUrl: string;

        /** ExternalAdReplyInfo thumbnail. */
        public thumbnail: Uint8Array;

        /** ExternalAdReplyInfo sourceType. */
        public sourceType: string;

        /** ExternalAdReplyInfo sourceId. */
        public sourceId: string;

        /** ExternalAdReplyInfo sourceUrl. */
        public sourceUrl: string;

        /**
         * Creates a new ExternalAdReplyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExternalAdReplyInfo instance
         */
        public static create(properties?: proto.IExternalAdReplyInfo): proto.ExternalAdReplyInfo;

        /**
         * Encodes the specified ExternalAdReplyInfo message. Does not implicitly {@link proto.ExternalAdReplyInfo.verify|verify} messages.
         * @param message ExternalAdReplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IExternalAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExternalAdReplyInfo message, length delimited. Does not implicitly {@link proto.ExternalAdReplyInfo.verify|verify} messages.
         * @param message ExternalAdReplyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IExternalAdReplyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExternalAdReplyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExternalAdReplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ExternalAdReplyInfo;

        /**
         * Decodes an ExternalAdReplyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExternalAdReplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ExternalAdReplyInfo;

        /**
         * Verifies an ExternalAdReplyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExternalAdReplyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExternalAdReplyInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.ExternalAdReplyInfo;

        /**
         * Creates a plain object from an ExternalAdReplyInfo message. Also converts values to other types if specified.
         * @param message ExternalAdReplyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ExternalAdReplyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExternalAdReplyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ExternalAdReplyInfo {

        /** ExternalAdReplyInfoMediaType enum. */
        enum ExternalAdReplyInfoMediaType {
            NONE = 0,
            IMAGE = 1,
            VIDEO = 2
        }
    }

    /** Properties of a ContextInfo. */
    interface IContextInfo {

        /** ContextInfo stanzaId */
        stanzaId?: (string|null);

        /** ContextInfo participant */
        participant?: (string|null);

        /** ContextInfo quotedMessage */
        quotedMessage?: (proto.IMessage|null);

        /** ContextInfo remoteJid */
        remoteJid?: (string|null);

        /** ContextInfo mentionedJid */
        mentionedJid?: (string[]|null);

        /** ContextInfo conversionSource */
        conversionSource?: (string|null);

        /** ContextInfo conversionData */
        conversionData?: (Uint8Array|null);

        /** ContextInfo conversionDelaySeconds */
        conversionDelaySeconds?: (number|null);

        /** ContextInfo forwardingScore */
        forwardingScore?: (number|null);

        /** ContextInfo isForwarded */
        isForwarded?: (boolean|null);

        /** ContextInfo quotedAd */
        quotedAd?: (proto.IAdReplyInfo|null);

        /** ContextInfo placeholderKey */
        placeholderKey?: (proto.IMessageKey|null);

        /** ContextInfo expiration */
        expiration?: (number|null);

        /** ContextInfo ephemeralSettingTimestamp */
        ephemeralSettingTimestamp?: (number|Long|null);

        /** ContextInfo ephemeralSharedSecret */
        ephemeralSharedSecret?: (Uint8Array|null);

        /** ContextInfo externalAdReply */
        externalAdReply?: (proto.IExternalAdReplyInfo|null);

        /** ContextInfo entryPointConversionSource */
        entryPointConversionSource?: (string|null);

        /** ContextInfo entryPointConversionApp */
        entryPointConversionApp?: (string|null);

        /** ContextInfo entryPointConversionDelaySeconds */
        entryPointConversionDelaySeconds?: (number|null);
    }

    /** Represents a ContextInfo. */
    class ContextInfo implements IContextInfo {

        /**
         * Constructs a new ContextInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IContextInfo);

        /** ContextInfo stanzaId. */
        public stanzaId: string;

        /** ContextInfo participant. */
        public participant: string;

        /** ContextInfo quotedMessage. */
        public quotedMessage?: (proto.IMessage|null);

        /** ContextInfo remoteJid. */
        public remoteJid: string;

        /** ContextInfo mentionedJid. */
        public mentionedJid: string[];

        /** ContextInfo conversionSource. */
        public conversionSource: string;

        /** ContextInfo conversionData. */
        public conversionData: Uint8Array;

        /** ContextInfo conversionDelaySeconds. */
        public conversionDelaySeconds: number;

        /** ContextInfo forwardingScore. */
        public forwardingScore: number;

        /** ContextInfo isForwarded. */
        public isForwarded: boolean;

        /** ContextInfo quotedAd. */
        public quotedAd?: (proto.IAdReplyInfo|null);

        /** ContextInfo placeholderKey. */
        public placeholderKey?: (proto.IMessageKey|null);

        /** ContextInfo expiration. */
        public expiration: number;

        /** ContextInfo ephemeralSettingTimestamp. */
        public ephemeralSettingTimestamp: (number|Long);

        /** ContextInfo ephemeralSharedSecret. */
        public ephemeralSharedSecret: Uint8Array;

        /** ContextInfo externalAdReply. */
        public externalAdReply?: (proto.IExternalAdReplyInfo|null);

        /** ContextInfo entryPointConversionSource. */
        public entryPointConversionSource: string;

        /** ContextInfo entryPointConversionApp. */
        public entryPointConversionApp: string;

        /** ContextInfo entryPointConversionDelaySeconds. */
        public entryPointConversionDelaySeconds: number;

        /**
         * Creates a new ContextInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContextInfo instance
         */
        public static create(properties?: proto.IContextInfo): proto.ContextInfo;

        /**
         * Encodes the specified ContextInfo message. Does not implicitly {@link proto.ContextInfo.verify|verify} messages.
         * @param message ContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContextInfo message, length delimited. Does not implicitly {@link proto.ContextInfo.verify|verify} messages.
         * @param message ContextInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IContextInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContextInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ContextInfo;

        /**
         * Decodes a ContextInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContextInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ContextInfo;

        /**
         * Verifies a ContextInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContextInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContextInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.ContextInfo;

        /**
         * Creates a plain object from a ContextInfo message. Also converts values to other types if specified.
         * @param message ContextInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ContextInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContextInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SenderKeyDistributionMessage. */
    interface ISenderKeyDistributionMessage {

        /** SenderKeyDistributionMessage groupId */
        groupId?: (string|null);

        /** SenderKeyDistributionMessage axolotlSenderKeyDistributionMessage */
        axolotlSenderKeyDistributionMessage?: (Uint8Array|null);
    }

    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISenderKeyDistributionMessage);

        /** SenderKeyDistributionMessage groupId. */
        public groupId: string;

        /** SenderKeyDistributionMessage axolotlSenderKeyDistributionMessage. */
        public axolotlSenderKeyDistributionMessage: Uint8Array;

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyDistributionMessage instance
         */
        public static create(properties?: proto.ISenderKeyDistributionMessage): proto.SenderKeyDistributionMessage;

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link proto.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link proto.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SenderKeyDistributionMessage;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SenderKeyDistributionMessage;

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyDistributionMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.SenderKeyDistributionMessage;

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @param message SenderKeyDistributionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SenderKeyDistributionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ImageMessage. */
    interface IImageMessage {

        /** ImageMessage url */
        url?: (string|null);

        /** ImageMessage mimetype */
        mimetype?: (string|null);

        /** ImageMessage caption */
        caption?: (string|null);

        /** ImageMessage fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** ImageMessage fileLength */
        fileLength?: (number|Long|null);

        /** ImageMessage height */
        height?: (number|null);

        /** ImageMessage width */
        width?: (number|null);

        /** ImageMessage mediaKey */
        mediaKey?: (Uint8Array|null);

        /** ImageMessage fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);

        /** ImageMessage interactiveAnnotations */
        interactiveAnnotations?: (proto.IInteractiveAnnotation[]|null);

        /** ImageMessage directPath */
        directPath?: (string|null);

        /** ImageMessage mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** ImageMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** ImageMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** ImageMessage firstScanSidecar */
        firstScanSidecar?: (Uint8Array|null);

        /** ImageMessage firstScanLength */
        firstScanLength?: (number|null);

        /** ImageMessage experimentGroupId */
        experimentGroupId?: (number|null);

        /** ImageMessage scansSidecar */
        scansSidecar?: (Uint8Array|null);

        /** ImageMessage scanLengths */
        scanLengths?: (number[]|null);

        /** ImageMessage midQualityFileSha256 */
        midQualityFileSha256?: (Uint8Array|null);

        /** ImageMessage midQualityFileEncSha256 */
        midQualityFileEncSha256?: (Uint8Array|null);

        /** ImageMessage viewOnce */
        viewOnce?: (boolean|null);

        /** ImageMessage thumbnailDirectPath */
        thumbnailDirectPath?: (string|null);

        /** ImageMessage thumbnailSha256 */
        thumbnailSha256?: (Uint8Array|null);

        /** ImageMessage thumbnailEncSha256 */
        thumbnailEncSha256?: (Uint8Array|null);
    }

    /** Represents an ImageMessage. */
    class ImageMessage implements IImageMessage {

        /**
         * Constructs a new ImageMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IImageMessage);

        /** ImageMessage url. */
        public url: string;

        /** ImageMessage mimetype. */
        public mimetype: string;

        /** ImageMessage caption. */
        public caption: string;

        /** ImageMessage fileSha256. */
        public fileSha256: Uint8Array;

        /** ImageMessage fileLength. */
        public fileLength: (number|Long);

        /** ImageMessage height. */
        public height: number;

        /** ImageMessage width. */
        public width: number;

        /** ImageMessage mediaKey. */
        public mediaKey: Uint8Array;

        /** ImageMessage fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /** ImageMessage interactiveAnnotations. */
        public interactiveAnnotations: proto.IInteractiveAnnotation[];

        /** ImageMessage directPath. */
        public directPath: string;

        /** ImageMessage mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** ImageMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** ImageMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** ImageMessage firstScanSidecar. */
        public firstScanSidecar: Uint8Array;

        /** ImageMessage firstScanLength. */
        public firstScanLength: number;

        /** ImageMessage experimentGroupId. */
        public experimentGroupId: number;

        /** ImageMessage scansSidecar. */
        public scansSidecar: Uint8Array;

        /** ImageMessage scanLengths. */
        public scanLengths: number[];

        /** ImageMessage midQualityFileSha256. */
        public midQualityFileSha256: Uint8Array;

        /** ImageMessage midQualityFileEncSha256. */
        public midQualityFileEncSha256: Uint8Array;

        /** ImageMessage viewOnce. */
        public viewOnce: boolean;

        /** ImageMessage thumbnailDirectPath. */
        public thumbnailDirectPath: string;

        /** ImageMessage thumbnailSha256. */
        public thumbnailSha256: Uint8Array;

        /** ImageMessage thumbnailEncSha256. */
        public thumbnailEncSha256: Uint8Array;

        /**
         * Creates a new ImageMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImageMessage instance
         */
        public static create(properties?: proto.IImageMessage): proto.ImageMessage;

        /**
         * Encodes the specified ImageMessage message. Does not implicitly {@link proto.ImageMessage.verify|verify} messages.
         * @param message ImageMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IImageMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImageMessage message, length delimited. Does not implicitly {@link proto.ImageMessage.verify|verify} messages.
         * @param message ImageMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IImageMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImageMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImageMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ImageMessage;

        /**
         * Decodes an ImageMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImageMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ImageMessage;

        /**
         * Verifies an ImageMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImageMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImageMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ImageMessage;

        /**
         * Creates a plain object from an ImageMessage message. Also converts values to other types if specified.
         * @param message ImageMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ImageMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImageMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InvoiceMessage. */
    interface IInvoiceMessage {

        /** InvoiceMessage note */
        note?: (string|null);

        /** InvoiceMessage token */
        token?: (string|null);

        /** InvoiceMessage attachmentType */
        attachmentType?: (proto.InvoiceMessage.InvoiceMessageAttachmentType|null);

        /** InvoiceMessage attachmentMimetype */
        attachmentMimetype?: (string|null);

        /** InvoiceMessage attachmentMediaKey */
        attachmentMediaKey?: (Uint8Array|null);

        /** InvoiceMessage attachmentMediaKeyTimestamp */
        attachmentMediaKeyTimestamp?: (number|Long|null);

        /** InvoiceMessage attachmentFileSha256 */
        attachmentFileSha256?: (Uint8Array|null);

        /** InvoiceMessage attachmentFileEncSha256 */
        attachmentFileEncSha256?: (Uint8Array|null);

        /** InvoiceMessage attachmentDirectPath */
        attachmentDirectPath?: (string|null);

        /** InvoiceMessage attachmentJpegThumbnail */
        attachmentJpegThumbnail?: (Uint8Array|null);
    }

    /** Represents an InvoiceMessage. */
    class InvoiceMessage implements IInvoiceMessage {

        /**
         * Constructs a new InvoiceMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IInvoiceMessage);

        /** InvoiceMessage note. */
        public note: string;

        /** InvoiceMessage token. */
        public token: string;

        /** InvoiceMessage attachmentType. */
        public attachmentType: proto.InvoiceMessage.InvoiceMessageAttachmentType;

        /** InvoiceMessage attachmentMimetype. */
        public attachmentMimetype: string;

        /** InvoiceMessage attachmentMediaKey. */
        public attachmentMediaKey: Uint8Array;

        /** InvoiceMessage attachmentMediaKeyTimestamp. */
        public attachmentMediaKeyTimestamp: (number|Long);

        /** InvoiceMessage attachmentFileSha256. */
        public attachmentFileSha256: Uint8Array;

        /** InvoiceMessage attachmentFileEncSha256. */
        public attachmentFileEncSha256: Uint8Array;

        /** InvoiceMessage attachmentDirectPath. */
        public attachmentDirectPath: string;

        /** InvoiceMessage attachmentJpegThumbnail. */
        public attachmentJpegThumbnail: Uint8Array;

        /**
         * Creates a new InvoiceMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InvoiceMessage instance
         */
        public static create(properties?: proto.IInvoiceMessage): proto.InvoiceMessage;

        /**
         * Encodes the specified InvoiceMessage message. Does not implicitly {@link proto.InvoiceMessage.verify|verify} messages.
         * @param message InvoiceMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IInvoiceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InvoiceMessage message, length delimited. Does not implicitly {@link proto.InvoiceMessage.verify|verify} messages.
         * @param message InvoiceMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IInvoiceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InvoiceMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InvoiceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.InvoiceMessage;

        /**
         * Decodes an InvoiceMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InvoiceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.InvoiceMessage;

        /**
         * Verifies an InvoiceMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InvoiceMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InvoiceMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.InvoiceMessage;

        /**
         * Creates a plain object from an InvoiceMessage message. Also converts values to other types if specified.
         * @param message InvoiceMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.InvoiceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InvoiceMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace InvoiceMessage {

        /** InvoiceMessageAttachmentType enum. */
        enum InvoiceMessageAttachmentType {
            IMAGE = 0,
            PDF = 1
        }
    }

    /** Properties of a ContactMessage. */
    interface IContactMessage {

        /** ContactMessage displayName */
        displayName?: (string|null);

        /** ContactMessage vcard */
        vcard?: (string|null);

        /** ContactMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a ContactMessage. */
    class ContactMessage implements IContactMessage {

        /**
         * Constructs a new ContactMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IContactMessage);

        /** ContactMessage displayName. */
        public displayName: string;

        /** ContactMessage vcard. */
        public vcard: string;

        /** ContactMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new ContactMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContactMessage instance
         */
        public static create(properties?: proto.IContactMessage): proto.ContactMessage;

        /**
         * Encodes the specified ContactMessage message. Does not implicitly {@link proto.ContactMessage.verify|verify} messages.
         * @param message ContactMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IContactMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContactMessage message, length delimited. Does not implicitly {@link proto.ContactMessage.verify|verify} messages.
         * @param message ContactMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IContactMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContactMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContactMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ContactMessage;

        /**
         * Decodes a ContactMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContactMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ContactMessage;

        /**
         * Verifies a ContactMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContactMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContactMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ContactMessage;

        /**
         * Creates a plain object from a ContactMessage message. Also converts values to other types if specified.
         * @param message ContactMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ContactMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContactMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LocationMessage. */
    interface ILocationMessage {

        /** LocationMessage degreesLatitude */
        degreesLatitude?: (number|null);

        /** LocationMessage degreesLongitude */
        degreesLongitude?: (number|null);

        /** LocationMessage name */
        name?: (string|null);

        /** LocationMessage address */
        address?: (string|null);

        /** LocationMessage url */
        url?: (string|null);

        /** LocationMessage isLive */
        isLive?: (boolean|null);

        /** LocationMessage accuracyInMeters */
        accuracyInMeters?: (number|null);

        /** LocationMessage speedInMps */
        speedInMps?: (number|null);

        /** LocationMessage degreesClockwiseFromMagneticNorth */
        degreesClockwiseFromMagneticNorth?: (number|null);

        /** LocationMessage comment */
        comment?: (string|null);

        /** LocationMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** LocationMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a LocationMessage. */
    class LocationMessage implements ILocationMessage {

        /**
         * Constructs a new LocationMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILocationMessage);

        /** LocationMessage degreesLatitude. */
        public degreesLatitude: number;

        /** LocationMessage degreesLongitude. */
        public degreesLongitude: number;

        /** LocationMessage name. */
        public name: string;

        /** LocationMessage address. */
        public address: string;

        /** LocationMessage url. */
        public url: string;

        /** LocationMessage isLive. */
        public isLive: boolean;

        /** LocationMessage accuracyInMeters. */
        public accuracyInMeters: number;

        /** LocationMessage speedInMps. */
        public speedInMps: number;

        /** LocationMessage degreesClockwiseFromMagneticNorth. */
        public degreesClockwiseFromMagneticNorth: number;

        /** LocationMessage comment. */
        public comment: string;

        /** LocationMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** LocationMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new LocationMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocationMessage instance
         */
        public static create(properties?: proto.ILocationMessage): proto.LocationMessage;

        /**
         * Encodes the specified LocationMessage message. Does not implicitly {@link proto.LocationMessage.verify|verify} messages.
         * @param message LocationMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LocationMessage message, length delimited. Does not implicitly {@link proto.LocationMessage.verify|verify} messages.
         * @param message LocationMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocationMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LocationMessage;

        /**
         * Decodes a LocationMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LocationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LocationMessage;

        /**
         * Verifies a LocationMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LocationMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocationMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.LocationMessage;

        /**
         * Creates a plain object from a LocationMessage message. Also converts values to other types if specified.
         * @param message LocationMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LocationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocationMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExtendedTextMessage. */
    interface IExtendedTextMessage {

        /** ExtendedTextMessage text */
        text?: (string|null);

        /** ExtendedTextMessage matchedText */
        matchedText?: (string|null);

        /** ExtendedTextMessage canonicalUrl */
        canonicalUrl?: (string|null);

        /** ExtendedTextMessage description */
        description?: (string|null);

        /** ExtendedTextMessage title */
        title?: (string|null);

        /** ExtendedTextMessage textArgb */
        textArgb?: (number|null);

        /** ExtendedTextMessage backgroundArgb */
        backgroundArgb?: (number|null);

        /** ExtendedTextMessage font */
        font?: (proto.ExtendedTextMessage.ExtendedTextMessageFontType|null);

        /** ExtendedTextMessage previewType */
        previewType?: (proto.ExtendedTextMessage.ExtendedTextMessagePreviewType|null);

        /** ExtendedTextMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** ExtendedTextMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** ExtendedTextMessage doNotPlayInline */
        doNotPlayInline?: (boolean|null);

        /** ExtendedTextMessage thumbnailDirectPath */
        thumbnailDirectPath?: (string|null);

        /** ExtendedTextMessage thumbnailSha256 */
        thumbnailSha256?: (Uint8Array|null);

        /** ExtendedTextMessage thumbnailEncSha256 */
        thumbnailEncSha256?: (Uint8Array|null);

        /** ExtendedTextMessage mediaKey */
        mediaKey?: (Uint8Array|null);

        /** ExtendedTextMessage mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** ExtendedTextMessage thumbnailHeight */
        thumbnailHeight?: (number|null);

        /** ExtendedTextMessage thumbnailWidth */
        thumbnailWidth?: (number|null);
    }

    /** Represents an ExtendedTextMessage. */
    class ExtendedTextMessage implements IExtendedTextMessage {

        /**
         * Constructs a new ExtendedTextMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IExtendedTextMessage);

        /** ExtendedTextMessage text. */
        public text: string;

        /** ExtendedTextMessage matchedText. */
        public matchedText: string;

        /** ExtendedTextMessage canonicalUrl. */
        public canonicalUrl: string;

        /** ExtendedTextMessage description. */
        public description: string;

        /** ExtendedTextMessage title. */
        public title: string;

        /** ExtendedTextMessage textArgb. */
        public textArgb: number;

        /** ExtendedTextMessage backgroundArgb. */
        public backgroundArgb: number;

        /** ExtendedTextMessage font. */
        public font: proto.ExtendedTextMessage.ExtendedTextMessageFontType;

        /** ExtendedTextMessage previewType. */
        public previewType: proto.ExtendedTextMessage.ExtendedTextMessagePreviewType;

        /** ExtendedTextMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** ExtendedTextMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** ExtendedTextMessage doNotPlayInline. */
        public doNotPlayInline: boolean;

        /** ExtendedTextMessage thumbnailDirectPath. */
        public thumbnailDirectPath: string;

        /** ExtendedTextMessage thumbnailSha256. */
        public thumbnailSha256: Uint8Array;

        /** ExtendedTextMessage thumbnailEncSha256. */
        public thumbnailEncSha256: Uint8Array;

        /** ExtendedTextMessage mediaKey. */
        public mediaKey: Uint8Array;

        /** ExtendedTextMessage mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** ExtendedTextMessage thumbnailHeight. */
        public thumbnailHeight: number;

        /** ExtendedTextMessage thumbnailWidth. */
        public thumbnailWidth: number;

        /**
         * Creates a new ExtendedTextMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtendedTextMessage instance
         */
        public static create(properties?: proto.IExtendedTextMessage): proto.ExtendedTextMessage;

        /**
         * Encodes the specified ExtendedTextMessage message. Does not implicitly {@link proto.ExtendedTextMessage.verify|verify} messages.
         * @param message ExtendedTextMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IExtendedTextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExtendedTextMessage message, length delimited. Does not implicitly {@link proto.ExtendedTextMessage.verify|verify} messages.
         * @param message ExtendedTextMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IExtendedTextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExtendedTextMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtendedTextMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ExtendedTextMessage;

        /**
         * Decodes an ExtendedTextMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExtendedTextMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ExtendedTextMessage;

        /**
         * Verifies an ExtendedTextMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExtendedTextMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExtendedTextMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ExtendedTextMessage;

        /**
         * Creates a plain object from an ExtendedTextMessage message. Also converts values to other types if specified.
         * @param message ExtendedTextMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ExtendedTextMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExtendedTextMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ExtendedTextMessage {

        /** ExtendedTextMessageFontType enum. */
        enum ExtendedTextMessageFontType {
            SANS_SERIF = 0,
            SERIF = 1,
            NORICAN_REGULAR = 2,
            BRYNDAN_WRITE = 3,
            BEBASNEUE_REGULAR = 4,
            OSWALD_HEAVY = 5
        }

        /** ExtendedTextMessagePreviewType enum. */
        enum ExtendedTextMessagePreviewType {
            NONE = 0,
            VIDEO = 1
        }
    }

    /** Properties of a DocumentMessage. */
    interface IDocumentMessage {

        /** DocumentMessage url */
        url?: (string|null);

        /** DocumentMessage mimetype */
        mimetype?: (string|null);

        /** DocumentMessage title */
        title?: (string|null);

        /** DocumentMessage fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** DocumentMessage fileLength */
        fileLength?: (number|Long|null);

        /** DocumentMessage pageCount */
        pageCount?: (number|null);

        /** DocumentMessage mediaKey */
        mediaKey?: (Uint8Array|null);

        /** DocumentMessage fileName */
        fileName?: (string|null);

        /** DocumentMessage fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);

        /** DocumentMessage directPath */
        directPath?: (string|null);

        /** DocumentMessage mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** DocumentMessage contactVcard */
        contactVcard?: (boolean|null);

        /** DocumentMessage thumbnailDirectPath */
        thumbnailDirectPath?: (string|null);

        /** DocumentMessage thumbnailSha256 */
        thumbnailSha256?: (Uint8Array|null);

        /** DocumentMessage thumbnailEncSha256 */
        thumbnailEncSha256?: (Uint8Array|null);

        /** DocumentMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** DocumentMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** DocumentMessage thumbnailHeight */
        thumbnailHeight?: (number|null);

        /** DocumentMessage thumbnailWidth */
        thumbnailWidth?: (number|null);
    }

    /** Represents a DocumentMessage. */
    class DocumentMessage implements IDocumentMessage {

        /**
         * Constructs a new DocumentMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDocumentMessage);

        /** DocumentMessage url. */
        public url: string;

        /** DocumentMessage mimetype. */
        public mimetype: string;

        /** DocumentMessage title. */
        public title: string;

        /** DocumentMessage fileSha256. */
        public fileSha256: Uint8Array;

        /** DocumentMessage fileLength. */
        public fileLength: (number|Long);

        /** DocumentMessage pageCount. */
        public pageCount: number;

        /** DocumentMessage mediaKey. */
        public mediaKey: Uint8Array;

        /** DocumentMessage fileName. */
        public fileName: string;

        /** DocumentMessage fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /** DocumentMessage directPath. */
        public directPath: string;

        /** DocumentMessage mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** DocumentMessage contactVcard. */
        public contactVcard: boolean;

        /** DocumentMessage thumbnailDirectPath. */
        public thumbnailDirectPath: string;

        /** DocumentMessage thumbnailSha256. */
        public thumbnailSha256: Uint8Array;

        /** DocumentMessage thumbnailEncSha256. */
        public thumbnailEncSha256: Uint8Array;

        /** DocumentMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** DocumentMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** DocumentMessage thumbnailHeight. */
        public thumbnailHeight: number;

        /** DocumentMessage thumbnailWidth. */
        public thumbnailWidth: number;

        /**
         * Creates a new DocumentMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DocumentMessage instance
         */
        public static create(properties?: proto.IDocumentMessage): proto.DocumentMessage;

        /**
         * Encodes the specified DocumentMessage message. Does not implicitly {@link proto.DocumentMessage.verify|verify} messages.
         * @param message DocumentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDocumentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DocumentMessage message, length delimited. Does not implicitly {@link proto.DocumentMessage.verify|verify} messages.
         * @param message DocumentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDocumentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DocumentMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DocumentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DocumentMessage;

        /**
         * Decodes a DocumentMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DocumentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DocumentMessage;

        /**
         * Verifies a DocumentMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DocumentMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DocumentMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.DocumentMessage;

        /**
         * Creates a plain object from a DocumentMessage message. Also converts values to other types if specified.
         * @param message DocumentMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DocumentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DocumentMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AudioMessage. */
    interface IAudioMessage {

        /** AudioMessage url */
        url?: (string|null);

        /** AudioMessage mimetype */
        mimetype?: (string|null);

        /** AudioMessage fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** AudioMessage fileLength */
        fileLength?: (number|Long|null);

        /** AudioMessage seconds */
        seconds?: (number|null);

        /** AudioMessage ptt */
        ptt?: (boolean|null);

        /** AudioMessage mediaKey */
        mediaKey?: (Uint8Array|null);

        /** AudioMessage fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);

        /** AudioMessage directPath */
        directPath?: (string|null);

        /** AudioMessage mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** AudioMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** AudioMessage streamingSidecar */
        streamingSidecar?: (Uint8Array|null);
    }

    /** Represents an AudioMessage. */
    class AudioMessage implements IAudioMessage {

        /**
         * Constructs a new AudioMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAudioMessage);

        /** AudioMessage url. */
        public url: string;

        /** AudioMessage mimetype. */
        public mimetype: string;

        /** AudioMessage fileSha256. */
        public fileSha256: Uint8Array;

        /** AudioMessage fileLength. */
        public fileLength: (number|Long);

        /** AudioMessage seconds. */
        public seconds: number;

        /** AudioMessage ptt. */
        public ptt: boolean;

        /** AudioMessage mediaKey. */
        public mediaKey: Uint8Array;

        /** AudioMessage fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /** AudioMessage directPath. */
        public directPath: string;

        /** AudioMessage mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** AudioMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** AudioMessage streamingSidecar. */
        public streamingSidecar: Uint8Array;

        /**
         * Creates a new AudioMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AudioMessage instance
         */
        public static create(properties?: proto.IAudioMessage): proto.AudioMessage;

        /**
         * Encodes the specified AudioMessage message. Does not implicitly {@link proto.AudioMessage.verify|verify} messages.
         * @param message AudioMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAudioMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AudioMessage message, length delimited. Does not implicitly {@link proto.AudioMessage.verify|verify} messages.
         * @param message AudioMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAudioMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AudioMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AudioMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AudioMessage;

        /**
         * Decodes an AudioMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AudioMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AudioMessage;

        /**
         * Verifies an AudioMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AudioMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AudioMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.AudioMessage;

        /**
         * Creates a plain object from an AudioMessage message. Also converts values to other types if specified.
         * @param message AudioMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AudioMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AudioMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VideoMessage. */
    interface IVideoMessage {

        /** VideoMessage url */
        url?: (string|null);

        /** VideoMessage mimetype */
        mimetype?: (string|null);

        /** VideoMessage fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** VideoMessage fileLength */
        fileLength?: (number|Long|null);

        /** VideoMessage seconds */
        seconds?: (number|null);

        /** VideoMessage mediaKey */
        mediaKey?: (Uint8Array|null);

        /** VideoMessage caption */
        caption?: (string|null);

        /** VideoMessage gifPlayback */
        gifPlayback?: (boolean|null);

        /** VideoMessage height */
        height?: (number|null);

        /** VideoMessage width */
        width?: (number|null);

        /** VideoMessage fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);

        /** VideoMessage interactiveAnnotations */
        interactiveAnnotations?: (proto.IInteractiveAnnotation[]|null);

        /** VideoMessage directPath */
        directPath?: (string|null);

        /** VideoMessage mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** VideoMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** VideoMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** VideoMessage streamingSidecar */
        streamingSidecar?: (Uint8Array|null);

        /** VideoMessage gifAttribution */
        gifAttribution?: (proto.VideoMessage.VideoMessageAttribution|null);

        /** VideoMessage viewOnce */
        viewOnce?: (boolean|null);

        /** VideoMessage thumbnailDirectPath */
        thumbnailDirectPath?: (string|null);

        /** VideoMessage thumbnailSha256 */
        thumbnailSha256?: (Uint8Array|null);

        /** VideoMessage thumbnailEncSha256 */
        thumbnailEncSha256?: (Uint8Array|null);
    }

    /** Represents a VideoMessage. */
    class VideoMessage implements IVideoMessage {

        /**
         * Constructs a new VideoMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IVideoMessage);

        /** VideoMessage url. */
        public url: string;

        /** VideoMessage mimetype. */
        public mimetype: string;

        /** VideoMessage fileSha256. */
        public fileSha256: Uint8Array;

        /** VideoMessage fileLength. */
        public fileLength: (number|Long);

        /** VideoMessage seconds. */
        public seconds: number;

        /** VideoMessage mediaKey. */
        public mediaKey: Uint8Array;

        /** VideoMessage caption. */
        public caption: string;

        /** VideoMessage gifPlayback. */
        public gifPlayback: boolean;

        /** VideoMessage height. */
        public height: number;

        /** VideoMessage width. */
        public width: number;

        /** VideoMessage fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /** VideoMessage interactiveAnnotations. */
        public interactiveAnnotations: proto.IInteractiveAnnotation[];

        /** VideoMessage directPath. */
        public directPath: string;

        /** VideoMessage mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** VideoMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** VideoMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** VideoMessage streamingSidecar. */
        public streamingSidecar: Uint8Array;

        /** VideoMessage gifAttribution. */
        public gifAttribution: proto.VideoMessage.VideoMessageAttribution;

        /** VideoMessage viewOnce. */
        public viewOnce: boolean;

        /** VideoMessage thumbnailDirectPath. */
        public thumbnailDirectPath: string;

        /** VideoMessage thumbnailSha256. */
        public thumbnailSha256: Uint8Array;

        /** VideoMessage thumbnailEncSha256. */
        public thumbnailEncSha256: Uint8Array;

        /**
         * Creates a new VideoMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoMessage instance
         */
        public static create(properties?: proto.IVideoMessage): proto.VideoMessage;

        /**
         * Encodes the specified VideoMessage message. Does not implicitly {@link proto.VideoMessage.verify|verify} messages.
         * @param message VideoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IVideoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoMessage message, length delimited. Does not implicitly {@link proto.VideoMessage.verify|verify} messages.
         * @param message VideoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IVideoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.VideoMessage;

        /**
         * Decodes a VideoMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.VideoMessage;

        /**
         * Verifies a VideoMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.VideoMessage;

        /**
         * Creates a plain object from a VideoMessage message. Also converts values to other types if specified.
         * @param message VideoMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.VideoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace VideoMessage {

        /** VideoMessageAttribution enum. */
        enum VideoMessageAttribution {
            NONE = 0,
            GIPHY = 1,
            TENOR = 2
        }
    }

    /** Properties of a Call. */
    interface ICall {

        /** Call callKey */
        callKey?: (Uint8Array|null);

        /** Call conversionSource */
        conversionSource?: (string|null);

        /** Call conversionData */
        conversionData?: (Uint8Array|null);

        /** Call conversionDelaySeconds */
        conversionDelaySeconds?: (number|null);
    }

    /** Represents a Call. */
    class Call implements ICall {

        /**
         * Constructs a new Call.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICall);

        /** Call callKey. */
        public callKey: Uint8Array;

        /** Call conversionSource. */
        public conversionSource: string;

        /** Call conversionData. */
        public conversionData: Uint8Array;

        /** Call conversionDelaySeconds. */
        public conversionDelaySeconds: number;

        /**
         * Creates a new Call instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Call instance
         */
        public static create(properties?: proto.ICall): proto.Call;

        /**
         * Encodes the specified Call message. Does not implicitly {@link proto.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link proto.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Call;

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Call;

        /**
         * Verifies a Call message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Call message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Call
         */
        public static fromObject(object: { [k: string]: any }): proto.Call;

        /**
         * Creates a plain object from a Call message. Also converts values to other types if specified.
         * @param message Call
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Call to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chat. */
    interface IChat {

        /** Chat displayName */
        displayName?: (string|null);

        /** Chat id */
        id?: (string|null);
    }

    /** Represents a Chat. */
    class Chat implements IChat {

        /**
         * Constructs a new Chat.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IChat);

        /** Chat displayName. */
        public displayName: string;

        /** Chat id. */
        public id: string;

        /**
         * Creates a new Chat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chat instance
         */
        public static create(properties?: proto.IChat): proto.Chat;

        /**
         * Encodes the specified Chat message. Does not implicitly {@link proto.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link proto.Chat.verify|verify} messages.
         * @param message Chat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Chat;

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Chat;

        /**
         * Verifies a Chat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chat
         */
        public static fromObject(object: { [k: string]: any }): proto.Chat;

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @param message Chat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtocolMessage. */
    interface IProtocolMessage {

        /** ProtocolMessage key */
        key?: (proto.IMessageKey|null);

        /** ProtocolMessage type */
        type?: (proto.ProtocolMessage.ProtocolMessageType|null);

        /** ProtocolMessage ephemeralExpiration */
        ephemeralExpiration?: (number|null);

        /** ProtocolMessage ephemeralSettingTimestamp */
        ephemeralSettingTimestamp?: (number|Long|null);

        /** ProtocolMessage historySyncNotification */
        historySyncNotification?: (proto.IHistorySyncNotification|null);

        /** ProtocolMessage appStateSyncKeyShare */
        appStateSyncKeyShare?: (proto.IAppStateSyncKeyShare|null);

        /** ProtocolMessage appStateSyncKeyRequest */
        appStateSyncKeyRequest?: (proto.IAppStateSyncKeyRequest|null);

        /** ProtocolMessage initialSecurityNotificationSettingSync */
        initialSecurityNotificationSettingSync?: (proto.IInitialSecurityNotificationSettingSync|null);

        /** ProtocolMessage appStateFatalExceptionNotification */
        appStateFatalExceptionNotification?: (proto.IAppStateFatalExceptionNotification|null);
    }

    /** Represents a ProtocolMessage. */
    class ProtocolMessage implements IProtocolMessage {

        /**
         * Constructs a new ProtocolMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProtocolMessage);

        /** ProtocolMessage key. */
        public key?: (proto.IMessageKey|null);

        /** ProtocolMessage type. */
        public type: proto.ProtocolMessage.ProtocolMessageType;

        /** ProtocolMessage ephemeralExpiration. */
        public ephemeralExpiration: number;

        /** ProtocolMessage ephemeralSettingTimestamp. */
        public ephemeralSettingTimestamp: (number|Long);

        /** ProtocolMessage historySyncNotification. */
        public historySyncNotification?: (proto.IHistorySyncNotification|null);

        /** ProtocolMessage appStateSyncKeyShare. */
        public appStateSyncKeyShare?: (proto.IAppStateSyncKeyShare|null);

        /** ProtocolMessage appStateSyncKeyRequest. */
        public appStateSyncKeyRequest?: (proto.IAppStateSyncKeyRequest|null);

        /** ProtocolMessage initialSecurityNotificationSettingSync. */
        public initialSecurityNotificationSettingSync?: (proto.IInitialSecurityNotificationSettingSync|null);

        /** ProtocolMessage appStateFatalExceptionNotification. */
        public appStateFatalExceptionNotification?: (proto.IAppStateFatalExceptionNotification|null);

        /**
         * Creates a new ProtocolMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtocolMessage instance
         */
        public static create(properties?: proto.IProtocolMessage): proto.ProtocolMessage;

        /**
         * Encodes the specified ProtocolMessage message. Does not implicitly {@link proto.ProtocolMessage.verify|verify} messages.
         * @param message ProtocolMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProtocolMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtocolMessage message, length delimited. Does not implicitly {@link proto.ProtocolMessage.verify|verify} messages.
         * @param message ProtocolMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProtocolMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProtocolMessage;

        /**
         * Decodes a ProtocolMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtocolMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProtocolMessage;

        /**
         * Verifies a ProtocolMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtocolMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ProtocolMessage;

        /**
         * Creates a plain object from a ProtocolMessage message. Also converts values to other types if specified.
         * @param message ProtocolMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ProtocolMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ProtocolMessage {

        /** ProtocolMessageType enum. */
        enum ProtocolMessageType {
            REVOKE = 0,
            EPHEMERAL_SETTING = 3,
            EPHEMERAL_SYNC_RESPONSE = 4,
            HISTORY_SYNC_NOTIFICATION = 5,
            APP_STATE_SYNC_KEY_SHARE = 6,
            APP_STATE_SYNC_KEY_REQUEST = 7,
            MSG_FANOUT_BACKFILL_REQUEST = 8,
            INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
            APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10
        }
    }

    /** Properties of a HistorySyncNotification. */
    interface IHistorySyncNotification {

        /** HistorySyncNotification fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** HistorySyncNotification fileLength */
        fileLength?: (number|Long|null);

        /** HistorySyncNotification mediaKey */
        mediaKey?: (Uint8Array|null);

        /** HistorySyncNotification fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);

        /** HistorySyncNotification directPath */
        directPath?: (string|null);

        /** HistorySyncNotification syncType */
        syncType?: (proto.HistorySyncNotification.HistorySyncNotificationHistorySyncType|null);

        /** HistorySyncNotification chunkOrder */
        chunkOrder?: (number|null);

        /** HistorySyncNotification originalMessageId */
        originalMessageId?: (string|null);
    }

    /** Represents a HistorySyncNotification. */
    class HistorySyncNotification implements IHistorySyncNotification {

        /**
         * Constructs a new HistorySyncNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHistorySyncNotification);

        /** HistorySyncNotification fileSha256. */
        public fileSha256: Uint8Array;

        /** HistorySyncNotification fileLength. */
        public fileLength: (number|Long);

        /** HistorySyncNotification mediaKey. */
        public mediaKey: Uint8Array;

        /** HistorySyncNotification fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /** HistorySyncNotification directPath. */
        public directPath: string;

        /** HistorySyncNotification syncType. */
        public syncType: proto.HistorySyncNotification.HistorySyncNotificationHistorySyncType;

        /** HistorySyncNotification chunkOrder. */
        public chunkOrder: number;

        /** HistorySyncNotification originalMessageId. */
        public originalMessageId: string;

        /**
         * Creates a new HistorySyncNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistorySyncNotification instance
         */
        public static create(properties?: proto.IHistorySyncNotification): proto.HistorySyncNotification;

        /**
         * Encodes the specified HistorySyncNotification message. Does not implicitly {@link proto.HistorySyncNotification.verify|verify} messages.
         * @param message HistorySyncNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHistorySyncNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistorySyncNotification message, length delimited. Does not implicitly {@link proto.HistorySyncNotification.verify|verify} messages.
         * @param message HistorySyncNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHistorySyncNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistorySyncNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistorySyncNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HistorySyncNotification;

        /**
         * Decodes a HistorySyncNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistorySyncNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HistorySyncNotification;

        /**
         * Verifies a HistorySyncNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistorySyncNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistorySyncNotification
         */
        public static fromObject(object: { [k: string]: any }): proto.HistorySyncNotification;

        /**
         * Creates a plain object from a HistorySyncNotification message. Also converts values to other types if specified.
         * @param message HistorySyncNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HistorySyncNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistorySyncNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace HistorySyncNotification {

        /** HistorySyncNotificationHistorySyncType enum. */
        enum HistorySyncNotificationHistorySyncType {
            INITIAL_BOOTSTRAP = 0,
            INITIAL_STATUS_V3 = 1,
            FULL = 2,
            RECENT = 3,
            PUSH_NAME = 4
        }
    }

    /** Properties of an AppStateSyncKey. */
    interface IAppStateSyncKey {

        /** AppStateSyncKey keyId */
        keyId?: (proto.IAppStateSyncKeyId|null);

        /** AppStateSyncKey keyData */
        keyData?: (proto.IAppStateSyncKeyData|null);
    }

    /** Represents an AppStateSyncKey. */
    class AppStateSyncKey implements IAppStateSyncKey {

        /**
         * Constructs a new AppStateSyncKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateSyncKey);

        /** AppStateSyncKey keyId. */
        public keyId?: (proto.IAppStateSyncKeyId|null);

        /** AppStateSyncKey keyData. */
        public keyData?: (proto.IAppStateSyncKeyData|null);

        /**
         * Creates a new AppStateSyncKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateSyncKey instance
         */
        public static create(properties?: proto.IAppStateSyncKey): proto.AppStateSyncKey;

        /**
         * Encodes the specified AppStateSyncKey message. Does not implicitly {@link proto.AppStateSyncKey.verify|verify} messages.
         * @param message AppStateSyncKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateSyncKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateSyncKey message, length delimited. Does not implicitly {@link proto.AppStateSyncKey.verify|verify} messages.
         * @param message AppStateSyncKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateSyncKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateSyncKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateSyncKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateSyncKey;

        /**
         * Decodes an AppStateSyncKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateSyncKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateSyncKey;

        /**
         * Verifies an AppStateSyncKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateSyncKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateSyncKey
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateSyncKey;

        /**
         * Creates a plain object from an AppStateSyncKey message. Also converts values to other types if specified.
         * @param message AppStateSyncKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateSyncKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateSyncKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppStateSyncKeyId. */
    interface IAppStateSyncKeyId {

        /** AppStateSyncKeyId keyId */
        keyId?: (Uint8Array|null);
    }

    /** Represents an AppStateSyncKeyId. */
    class AppStateSyncKeyId implements IAppStateSyncKeyId {

        /**
         * Constructs a new AppStateSyncKeyId.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateSyncKeyId);

        /** AppStateSyncKeyId keyId. */
        public keyId: Uint8Array;

        /**
         * Creates a new AppStateSyncKeyId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateSyncKeyId instance
         */
        public static create(properties?: proto.IAppStateSyncKeyId): proto.AppStateSyncKeyId;

        /**
         * Encodes the specified AppStateSyncKeyId message. Does not implicitly {@link proto.AppStateSyncKeyId.verify|verify} messages.
         * @param message AppStateSyncKeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateSyncKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateSyncKeyId message, length delimited. Does not implicitly {@link proto.AppStateSyncKeyId.verify|verify} messages.
         * @param message AppStateSyncKeyId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateSyncKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateSyncKeyId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateSyncKeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateSyncKeyId;

        /**
         * Decodes an AppStateSyncKeyId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateSyncKeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateSyncKeyId;

        /**
         * Verifies an AppStateSyncKeyId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateSyncKeyId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateSyncKeyId
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateSyncKeyId;

        /**
         * Creates a plain object from an AppStateSyncKeyId message. Also converts values to other types if specified.
         * @param message AppStateSyncKeyId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateSyncKeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateSyncKeyId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppStateSyncKeyFingerprint. */
    interface IAppStateSyncKeyFingerprint {

        /** AppStateSyncKeyFingerprint rawId */
        rawId?: (number|null);

        /** AppStateSyncKeyFingerprint currentIndex */
        currentIndex?: (number|null);

        /** AppStateSyncKeyFingerprint deviceIndexes */
        deviceIndexes?: (number[]|null);
    }

    /** Represents an AppStateSyncKeyFingerprint. */
    class AppStateSyncKeyFingerprint implements IAppStateSyncKeyFingerprint {

        /**
         * Constructs a new AppStateSyncKeyFingerprint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateSyncKeyFingerprint);

        /** AppStateSyncKeyFingerprint rawId. */
        public rawId: number;

        /** AppStateSyncKeyFingerprint currentIndex. */
        public currentIndex: number;

        /** AppStateSyncKeyFingerprint deviceIndexes. */
        public deviceIndexes: number[];

        /**
         * Creates a new AppStateSyncKeyFingerprint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateSyncKeyFingerprint instance
         */
        public static create(properties?: proto.IAppStateSyncKeyFingerprint): proto.AppStateSyncKeyFingerprint;

        /**
         * Encodes the specified AppStateSyncKeyFingerprint message. Does not implicitly {@link proto.AppStateSyncKeyFingerprint.verify|verify} messages.
         * @param message AppStateSyncKeyFingerprint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateSyncKeyFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateSyncKeyFingerprint message, length delimited. Does not implicitly {@link proto.AppStateSyncKeyFingerprint.verify|verify} messages.
         * @param message AppStateSyncKeyFingerprint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateSyncKeyFingerprint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateSyncKeyFingerprint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateSyncKeyFingerprint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateSyncKeyFingerprint;

        /**
         * Decodes an AppStateSyncKeyFingerprint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateSyncKeyFingerprint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateSyncKeyFingerprint;

        /**
         * Verifies an AppStateSyncKeyFingerprint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateSyncKeyFingerprint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateSyncKeyFingerprint
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateSyncKeyFingerprint;

        /**
         * Creates a plain object from an AppStateSyncKeyFingerprint message. Also converts values to other types if specified.
         * @param message AppStateSyncKeyFingerprint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateSyncKeyFingerprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateSyncKeyFingerprint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppStateSyncKeyData. */
    interface IAppStateSyncKeyData {

        /** AppStateSyncKeyData keyData */
        keyData?: (Uint8Array|null);

        /** AppStateSyncKeyData fingerprint */
        fingerprint?: (proto.IAppStateSyncKeyFingerprint|null);

        /** AppStateSyncKeyData timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents an AppStateSyncKeyData. */
    class AppStateSyncKeyData implements IAppStateSyncKeyData {

        /**
         * Constructs a new AppStateSyncKeyData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateSyncKeyData);

        /** AppStateSyncKeyData keyData. */
        public keyData: Uint8Array;

        /** AppStateSyncKeyData fingerprint. */
        public fingerprint?: (proto.IAppStateSyncKeyFingerprint|null);

        /** AppStateSyncKeyData timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new AppStateSyncKeyData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateSyncKeyData instance
         */
        public static create(properties?: proto.IAppStateSyncKeyData): proto.AppStateSyncKeyData;

        /**
         * Encodes the specified AppStateSyncKeyData message. Does not implicitly {@link proto.AppStateSyncKeyData.verify|verify} messages.
         * @param message AppStateSyncKeyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateSyncKeyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateSyncKeyData message, length delimited. Does not implicitly {@link proto.AppStateSyncKeyData.verify|verify} messages.
         * @param message AppStateSyncKeyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateSyncKeyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateSyncKeyData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateSyncKeyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateSyncKeyData;

        /**
         * Decodes an AppStateSyncKeyData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateSyncKeyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateSyncKeyData;

        /**
         * Verifies an AppStateSyncKeyData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateSyncKeyData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateSyncKeyData
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateSyncKeyData;

        /**
         * Creates a plain object from an AppStateSyncKeyData message. Also converts values to other types if specified.
         * @param message AppStateSyncKeyData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateSyncKeyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateSyncKeyData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppStateSyncKeyShare. */
    interface IAppStateSyncKeyShare {

        /** AppStateSyncKeyShare keys */
        keys?: (proto.IAppStateSyncKey[]|null);
    }

    /** Represents an AppStateSyncKeyShare. */
    class AppStateSyncKeyShare implements IAppStateSyncKeyShare {

        /**
         * Constructs a new AppStateSyncKeyShare.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateSyncKeyShare);

        /** AppStateSyncKeyShare keys. */
        public keys: proto.IAppStateSyncKey[];

        /**
         * Creates a new AppStateSyncKeyShare instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateSyncKeyShare instance
         */
        public static create(properties?: proto.IAppStateSyncKeyShare): proto.AppStateSyncKeyShare;

        /**
         * Encodes the specified AppStateSyncKeyShare message. Does not implicitly {@link proto.AppStateSyncKeyShare.verify|verify} messages.
         * @param message AppStateSyncKeyShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateSyncKeyShare, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateSyncKeyShare message, length delimited. Does not implicitly {@link proto.AppStateSyncKeyShare.verify|verify} messages.
         * @param message AppStateSyncKeyShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateSyncKeyShare, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateSyncKeyShare message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateSyncKeyShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateSyncKeyShare;

        /**
         * Decodes an AppStateSyncKeyShare message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateSyncKeyShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateSyncKeyShare;

        /**
         * Verifies an AppStateSyncKeyShare message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateSyncKeyShare message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateSyncKeyShare
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateSyncKeyShare;

        /**
         * Creates a plain object from an AppStateSyncKeyShare message. Also converts values to other types if specified.
         * @param message AppStateSyncKeyShare
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateSyncKeyShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateSyncKeyShare to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppStateSyncKeyRequest. */
    interface IAppStateSyncKeyRequest {

        /** AppStateSyncKeyRequest keyIds */
        keyIds?: (proto.IAppStateSyncKeyId[]|null);
    }

    /** Represents an AppStateSyncKeyRequest. */
    class AppStateSyncKeyRequest implements IAppStateSyncKeyRequest {

        /**
         * Constructs a new AppStateSyncKeyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateSyncKeyRequest);

        /** AppStateSyncKeyRequest keyIds. */
        public keyIds: proto.IAppStateSyncKeyId[];

        /**
         * Creates a new AppStateSyncKeyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateSyncKeyRequest instance
         */
        public static create(properties?: proto.IAppStateSyncKeyRequest): proto.AppStateSyncKeyRequest;

        /**
         * Encodes the specified AppStateSyncKeyRequest message. Does not implicitly {@link proto.AppStateSyncKeyRequest.verify|verify} messages.
         * @param message AppStateSyncKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateSyncKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateSyncKeyRequest message, length delimited. Does not implicitly {@link proto.AppStateSyncKeyRequest.verify|verify} messages.
         * @param message AppStateSyncKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateSyncKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateSyncKeyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateSyncKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateSyncKeyRequest;

        /**
         * Decodes an AppStateSyncKeyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateSyncKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateSyncKeyRequest;

        /**
         * Verifies an AppStateSyncKeyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateSyncKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateSyncKeyRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateSyncKeyRequest;

        /**
         * Creates a plain object from an AppStateSyncKeyRequest message. Also converts values to other types if specified.
         * @param message AppStateSyncKeyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateSyncKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateSyncKeyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppStateFatalExceptionNotification. */
    interface IAppStateFatalExceptionNotification {

        /** AppStateFatalExceptionNotification collectionNames */
        collectionNames?: (string[]|null);

        /** AppStateFatalExceptionNotification timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents an AppStateFatalExceptionNotification. */
    class AppStateFatalExceptionNotification implements IAppStateFatalExceptionNotification {

        /**
         * Constructs a new AppStateFatalExceptionNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAppStateFatalExceptionNotification);

        /** AppStateFatalExceptionNotification collectionNames. */
        public collectionNames: string[];

        /** AppStateFatalExceptionNotification timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new AppStateFatalExceptionNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppStateFatalExceptionNotification instance
         */
        public static create(properties?: proto.IAppStateFatalExceptionNotification): proto.AppStateFatalExceptionNotification;

        /**
         * Encodes the specified AppStateFatalExceptionNotification message. Does not implicitly {@link proto.AppStateFatalExceptionNotification.verify|verify} messages.
         * @param message AppStateFatalExceptionNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAppStateFatalExceptionNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateFatalExceptionNotification message, length delimited. Does not implicitly {@link proto.AppStateFatalExceptionNotification.verify|verify} messages.
         * @param message AppStateFatalExceptionNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAppStateFatalExceptionNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateFatalExceptionNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppStateFatalExceptionNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AppStateFatalExceptionNotification;

        /**
         * Decodes an AppStateFatalExceptionNotification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppStateFatalExceptionNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AppStateFatalExceptionNotification;

        /**
         * Verifies an AppStateFatalExceptionNotification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppStateFatalExceptionNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppStateFatalExceptionNotification
         */
        public static fromObject(object: { [k: string]: any }): proto.AppStateFatalExceptionNotification;

        /**
         * Creates a plain object from an AppStateFatalExceptionNotification message. Also converts values to other types if specified.
         * @param message AppStateFatalExceptionNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AppStateFatalExceptionNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppStateFatalExceptionNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitialSecurityNotificationSettingSync. */
    interface IInitialSecurityNotificationSettingSync {

        /** InitialSecurityNotificationSettingSync securityNotificationEnabled */
        securityNotificationEnabled?: (boolean|null);
    }

    /** Represents an InitialSecurityNotificationSettingSync. */
    class InitialSecurityNotificationSettingSync implements IInitialSecurityNotificationSettingSync {

        /**
         * Constructs a new InitialSecurityNotificationSettingSync.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IInitialSecurityNotificationSettingSync);

        /** InitialSecurityNotificationSettingSync securityNotificationEnabled. */
        public securityNotificationEnabled: boolean;

        /**
         * Creates a new InitialSecurityNotificationSettingSync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitialSecurityNotificationSettingSync instance
         */
        public static create(properties?: proto.IInitialSecurityNotificationSettingSync): proto.InitialSecurityNotificationSettingSync;

        /**
         * Encodes the specified InitialSecurityNotificationSettingSync message. Does not implicitly {@link proto.InitialSecurityNotificationSettingSync.verify|verify} messages.
         * @param message InitialSecurityNotificationSettingSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IInitialSecurityNotificationSettingSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitialSecurityNotificationSettingSync message, length delimited. Does not implicitly {@link proto.InitialSecurityNotificationSettingSync.verify|verify} messages.
         * @param message InitialSecurityNotificationSettingSync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IInitialSecurityNotificationSettingSync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitialSecurityNotificationSettingSync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitialSecurityNotificationSettingSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.InitialSecurityNotificationSettingSync;

        /**
         * Decodes an InitialSecurityNotificationSettingSync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitialSecurityNotificationSettingSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.InitialSecurityNotificationSettingSync;

        /**
         * Verifies an InitialSecurityNotificationSettingSync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitialSecurityNotificationSettingSync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitialSecurityNotificationSettingSync
         */
        public static fromObject(object: { [k: string]: any }): proto.InitialSecurityNotificationSettingSync;

        /**
         * Creates a plain object from an InitialSecurityNotificationSettingSync message. Also converts values to other types if specified.
         * @param message InitialSecurityNotificationSettingSync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.InitialSecurityNotificationSettingSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitialSecurityNotificationSettingSync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContactsArrayMessage. */
    interface IContactsArrayMessage {

        /** ContactsArrayMessage displayName */
        displayName?: (string|null);

        /** ContactsArrayMessage contacts */
        contacts?: (proto.IContactMessage[]|null);

        /** ContactsArrayMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a ContactsArrayMessage. */
    class ContactsArrayMessage implements IContactsArrayMessage {

        /**
         * Constructs a new ContactsArrayMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IContactsArrayMessage);

        /** ContactsArrayMessage displayName. */
        public displayName: string;

        /** ContactsArrayMessage contacts. */
        public contacts: proto.IContactMessage[];

        /** ContactsArrayMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new ContactsArrayMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContactsArrayMessage instance
         */
        public static create(properties?: proto.IContactsArrayMessage): proto.ContactsArrayMessage;

        /**
         * Encodes the specified ContactsArrayMessage message. Does not implicitly {@link proto.ContactsArrayMessage.verify|verify} messages.
         * @param message ContactsArrayMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IContactsArrayMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContactsArrayMessage message, length delimited. Does not implicitly {@link proto.ContactsArrayMessage.verify|verify} messages.
         * @param message ContactsArrayMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IContactsArrayMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContactsArrayMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContactsArrayMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ContactsArrayMessage;

        /**
         * Decodes a ContactsArrayMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContactsArrayMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ContactsArrayMessage;

        /**
         * Verifies a ContactsArrayMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContactsArrayMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContactsArrayMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ContactsArrayMessage;

        /**
         * Creates a plain object from a ContactsArrayMessage message. Also converts values to other types if specified.
         * @param message ContactsArrayMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ContactsArrayMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContactsArrayMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HSMCurrency. */
    interface IHSMCurrency {

        /** HSMCurrency currencyCode */
        currencyCode?: (string|null);

        /** HSMCurrency amount1000 */
        amount1000?: (number|Long|null);
    }

    /** Represents a HSMCurrency. */
    class HSMCurrency implements IHSMCurrency {

        /**
         * Constructs a new HSMCurrency.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHSMCurrency);

        /** HSMCurrency currencyCode. */
        public currencyCode: string;

        /** HSMCurrency amount1000. */
        public amount1000: (number|Long);

        /**
         * Creates a new HSMCurrency instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HSMCurrency instance
         */
        public static create(properties?: proto.IHSMCurrency): proto.HSMCurrency;

        /**
         * Encodes the specified HSMCurrency message. Does not implicitly {@link proto.HSMCurrency.verify|verify} messages.
         * @param message HSMCurrency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHSMCurrency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HSMCurrency message, length delimited. Does not implicitly {@link proto.HSMCurrency.verify|verify} messages.
         * @param message HSMCurrency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHSMCurrency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HSMCurrency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HSMCurrency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HSMCurrency;

        /**
         * Decodes a HSMCurrency message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HSMCurrency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HSMCurrency;

        /**
         * Verifies a HSMCurrency message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HSMCurrency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HSMCurrency
         */
        public static fromObject(object: { [k: string]: any }): proto.HSMCurrency;

        /**
         * Creates a plain object from a HSMCurrency message. Also converts values to other types if specified.
         * @param message HSMCurrency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HSMCurrency, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HSMCurrency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HSMDateTimeComponent. */
    interface IHSMDateTimeComponent {

        /** HSMDateTimeComponent dayOfWeek */
        dayOfWeek?: (proto.HSMDateTimeComponent.HSMDateTimeComponentDayOfWeekType|null);

        /** HSMDateTimeComponent year */
        year?: (number|null);

        /** HSMDateTimeComponent month */
        month?: (number|null);

        /** HSMDateTimeComponent dayOfMonth */
        dayOfMonth?: (number|null);

        /** HSMDateTimeComponent hour */
        hour?: (number|null);

        /** HSMDateTimeComponent minute */
        minute?: (number|null);

        /** HSMDateTimeComponent calendar */
        calendar?: (proto.HSMDateTimeComponent.HSMDateTimeComponentCalendarType|null);
    }

    /** Represents a HSMDateTimeComponent. */
    class HSMDateTimeComponent implements IHSMDateTimeComponent {

        /**
         * Constructs a new HSMDateTimeComponent.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHSMDateTimeComponent);

        /** HSMDateTimeComponent dayOfWeek. */
        public dayOfWeek: proto.HSMDateTimeComponent.HSMDateTimeComponentDayOfWeekType;

        /** HSMDateTimeComponent year. */
        public year: number;

        /** HSMDateTimeComponent month. */
        public month: number;

        /** HSMDateTimeComponent dayOfMonth. */
        public dayOfMonth: number;

        /** HSMDateTimeComponent hour. */
        public hour: number;

        /** HSMDateTimeComponent minute. */
        public minute: number;

        /** HSMDateTimeComponent calendar. */
        public calendar: proto.HSMDateTimeComponent.HSMDateTimeComponentCalendarType;

        /**
         * Creates a new HSMDateTimeComponent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HSMDateTimeComponent instance
         */
        public static create(properties?: proto.IHSMDateTimeComponent): proto.HSMDateTimeComponent;

        /**
         * Encodes the specified HSMDateTimeComponent message. Does not implicitly {@link proto.HSMDateTimeComponent.verify|verify} messages.
         * @param message HSMDateTimeComponent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHSMDateTimeComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HSMDateTimeComponent message, length delimited. Does not implicitly {@link proto.HSMDateTimeComponent.verify|verify} messages.
         * @param message HSMDateTimeComponent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHSMDateTimeComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HSMDateTimeComponent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HSMDateTimeComponent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HSMDateTimeComponent;

        /**
         * Decodes a HSMDateTimeComponent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HSMDateTimeComponent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HSMDateTimeComponent;

        /**
         * Verifies a HSMDateTimeComponent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HSMDateTimeComponent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HSMDateTimeComponent
         */
        public static fromObject(object: { [k: string]: any }): proto.HSMDateTimeComponent;

        /**
         * Creates a plain object from a HSMDateTimeComponent message. Also converts values to other types if specified.
         * @param message HSMDateTimeComponent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HSMDateTimeComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HSMDateTimeComponent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace HSMDateTimeComponent {

        /** HSMDateTimeComponentDayOfWeekType enum. */
        enum HSMDateTimeComponentDayOfWeekType {
            MONDAY = 1,
            TUESDAY = 2,
            WEDNESDAY = 3,
            THURSDAY = 4,
            FRIDAY = 5,
            SATURDAY = 6,
            SUNDAY = 7
        }

        /** HSMDateTimeComponentCalendarType enum. */
        enum HSMDateTimeComponentCalendarType {
            GREGORIAN = 1,
            SOLAR_HIJRI = 2
        }
    }

    /** Properties of a HSMDateTimeUnixEpoch. */
    interface IHSMDateTimeUnixEpoch {

        /** HSMDateTimeUnixEpoch timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a HSMDateTimeUnixEpoch. */
    class HSMDateTimeUnixEpoch implements IHSMDateTimeUnixEpoch {

        /**
         * Constructs a new HSMDateTimeUnixEpoch.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHSMDateTimeUnixEpoch);

        /** HSMDateTimeUnixEpoch timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new HSMDateTimeUnixEpoch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HSMDateTimeUnixEpoch instance
         */
        public static create(properties?: proto.IHSMDateTimeUnixEpoch): proto.HSMDateTimeUnixEpoch;

        /**
         * Encodes the specified HSMDateTimeUnixEpoch message. Does not implicitly {@link proto.HSMDateTimeUnixEpoch.verify|verify} messages.
         * @param message HSMDateTimeUnixEpoch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHSMDateTimeUnixEpoch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HSMDateTimeUnixEpoch message, length delimited. Does not implicitly {@link proto.HSMDateTimeUnixEpoch.verify|verify} messages.
         * @param message HSMDateTimeUnixEpoch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHSMDateTimeUnixEpoch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HSMDateTimeUnixEpoch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HSMDateTimeUnixEpoch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HSMDateTimeUnixEpoch;

        /**
         * Decodes a HSMDateTimeUnixEpoch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HSMDateTimeUnixEpoch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HSMDateTimeUnixEpoch;

        /**
         * Verifies a HSMDateTimeUnixEpoch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HSMDateTimeUnixEpoch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HSMDateTimeUnixEpoch
         */
        public static fromObject(object: { [k: string]: any }): proto.HSMDateTimeUnixEpoch;

        /**
         * Creates a plain object from a HSMDateTimeUnixEpoch message. Also converts values to other types if specified.
         * @param message HSMDateTimeUnixEpoch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HSMDateTimeUnixEpoch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HSMDateTimeUnixEpoch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HSMDateTime. */
    interface IHSMDateTime {

        /** HSMDateTime component */
        component?: (proto.IHSMDateTimeComponent|null);

        /** HSMDateTime unixEpoch */
        unixEpoch?: (proto.IHSMDateTimeUnixEpoch|null);
    }

    /** Represents a HSMDateTime. */
    class HSMDateTime implements IHSMDateTime {

        /**
         * Constructs a new HSMDateTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHSMDateTime);

        /** HSMDateTime component. */
        public component?: (proto.IHSMDateTimeComponent|null);

        /** HSMDateTime unixEpoch. */
        public unixEpoch?: (proto.IHSMDateTimeUnixEpoch|null);

        /** HSMDateTime datetimeOneof. */
        public datetimeOneof?: ("component"|"unixEpoch");

        /**
         * Creates a new HSMDateTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HSMDateTime instance
         */
        public static create(properties?: proto.IHSMDateTime): proto.HSMDateTime;

        /**
         * Encodes the specified HSMDateTime message. Does not implicitly {@link proto.HSMDateTime.verify|verify} messages.
         * @param message HSMDateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHSMDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HSMDateTime message, length delimited. Does not implicitly {@link proto.HSMDateTime.verify|verify} messages.
         * @param message HSMDateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHSMDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HSMDateTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HSMDateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HSMDateTime;

        /**
         * Decodes a HSMDateTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HSMDateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HSMDateTime;

        /**
         * Verifies a HSMDateTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HSMDateTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HSMDateTime
         */
        public static fromObject(object: { [k: string]: any }): proto.HSMDateTime;

        /**
         * Creates a plain object from a HSMDateTime message. Also converts values to other types if specified.
         * @param message HSMDateTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HSMDateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HSMDateTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HSMLocalizableParameter. */
    interface IHSMLocalizableParameter {

        /** HSMLocalizableParameter default */
        "default"?: (string|null);

        /** HSMLocalizableParameter currency */
        currency?: (proto.IHSMCurrency|null);

        /** HSMLocalizableParameter dateTime */
        dateTime?: (proto.IHSMDateTime|null);
    }

    /** Represents a HSMLocalizableParameter. */
    class HSMLocalizableParameter implements IHSMLocalizableParameter {

        /**
         * Constructs a new HSMLocalizableParameter.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHSMLocalizableParameter);

        /** HSMLocalizableParameter default. */
        public default: string;

        /** HSMLocalizableParameter currency. */
        public currency?: (proto.IHSMCurrency|null);

        /** HSMLocalizableParameter dateTime. */
        public dateTime?: (proto.IHSMDateTime|null);

        /** HSMLocalizableParameter paramOneof. */
        public paramOneof?: ("currency"|"dateTime");

        /**
         * Creates a new HSMLocalizableParameter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HSMLocalizableParameter instance
         */
        public static create(properties?: proto.IHSMLocalizableParameter): proto.HSMLocalizableParameter;

        /**
         * Encodes the specified HSMLocalizableParameter message. Does not implicitly {@link proto.HSMLocalizableParameter.verify|verify} messages.
         * @param message HSMLocalizableParameter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHSMLocalizableParameter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HSMLocalizableParameter message, length delimited. Does not implicitly {@link proto.HSMLocalizableParameter.verify|verify} messages.
         * @param message HSMLocalizableParameter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHSMLocalizableParameter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HSMLocalizableParameter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HSMLocalizableParameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HSMLocalizableParameter;

        /**
         * Decodes a HSMLocalizableParameter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HSMLocalizableParameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HSMLocalizableParameter;

        /**
         * Verifies a HSMLocalizableParameter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HSMLocalizableParameter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HSMLocalizableParameter
         */
        public static fromObject(object: { [k: string]: any }): proto.HSMLocalizableParameter;

        /**
         * Creates a plain object from a HSMLocalizableParameter message. Also converts values to other types if specified.
         * @param message HSMLocalizableParameter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HSMLocalizableParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HSMLocalizableParameter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HighlyStructuredMessage. */
    interface IHighlyStructuredMessage {

        /** HighlyStructuredMessage namespace */
        namespace?: (string|null);

        /** HighlyStructuredMessage elementName */
        elementName?: (string|null);

        /** HighlyStructuredMessage params */
        params?: (string[]|null);

        /** HighlyStructuredMessage fallbackLg */
        fallbackLg?: (string|null);

        /** HighlyStructuredMessage fallbackLc */
        fallbackLc?: (string|null);

        /** HighlyStructuredMessage localizableParams */
        localizableParams?: (proto.IHSMLocalizableParameter[]|null);

        /** HighlyStructuredMessage deterministicLg */
        deterministicLg?: (string|null);

        /** HighlyStructuredMessage deterministicLc */
        deterministicLc?: (string|null);

        /** HighlyStructuredMessage hydratedHsm */
        hydratedHsm?: (proto.ITemplateMessage|null);
    }

    /** Represents a HighlyStructuredMessage. */
    class HighlyStructuredMessage implements IHighlyStructuredMessage {

        /**
         * Constructs a new HighlyStructuredMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHighlyStructuredMessage);

        /** HighlyStructuredMessage namespace. */
        public namespace: string;

        /** HighlyStructuredMessage elementName. */
        public elementName: string;

        /** HighlyStructuredMessage params. */
        public params: string[];

        /** HighlyStructuredMessage fallbackLg. */
        public fallbackLg: string;

        /** HighlyStructuredMessage fallbackLc. */
        public fallbackLc: string;

        /** HighlyStructuredMessage localizableParams. */
        public localizableParams: proto.IHSMLocalizableParameter[];

        /** HighlyStructuredMessage deterministicLg. */
        public deterministicLg: string;

        /** HighlyStructuredMessage deterministicLc. */
        public deterministicLc: string;

        /** HighlyStructuredMessage hydratedHsm. */
        public hydratedHsm?: (proto.ITemplateMessage|null);

        /**
         * Creates a new HighlyStructuredMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HighlyStructuredMessage instance
         */
        public static create(properties?: proto.IHighlyStructuredMessage): proto.HighlyStructuredMessage;

        /**
         * Encodes the specified HighlyStructuredMessage message. Does not implicitly {@link proto.HighlyStructuredMessage.verify|verify} messages.
         * @param message HighlyStructuredMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHighlyStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HighlyStructuredMessage message, length delimited. Does not implicitly {@link proto.HighlyStructuredMessage.verify|verify} messages.
         * @param message HighlyStructuredMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHighlyStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HighlyStructuredMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HighlyStructuredMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HighlyStructuredMessage;

        /**
         * Decodes a HighlyStructuredMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HighlyStructuredMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HighlyStructuredMessage;

        /**
         * Verifies a HighlyStructuredMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HighlyStructuredMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HighlyStructuredMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.HighlyStructuredMessage;

        /**
         * Creates a plain object from a HighlyStructuredMessage message. Also converts values to other types if specified.
         * @param message HighlyStructuredMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HighlyStructuredMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HighlyStructuredMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendPaymentMessage. */
    interface ISendPaymentMessage {

        /** SendPaymentMessage noteMessage */
        noteMessage?: (proto.IMessage|null);

        /** SendPaymentMessage requestMessageKey */
        requestMessageKey?: (proto.IMessageKey|null);

        /** SendPaymentMessage background */
        background?: (proto.IPaymentBackground|null);
    }

    /** Represents a SendPaymentMessage. */
    class SendPaymentMessage implements ISendPaymentMessage {

        /**
         * Constructs a new SendPaymentMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendPaymentMessage);

        /** SendPaymentMessage noteMessage. */
        public noteMessage?: (proto.IMessage|null);

        /** SendPaymentMessage requestMessageKey. */
        public requestMessageKey?: (proto.IMessageKey|null);

        /** SendPaymentMessage background. */
        public background?: (proto.IPaymentBackground|null);

        /**
         * Creates a new SendPaymentMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPaymentMessage instance
         */
        public static create(properties?: proto.ISendPaymentMessage): proto.SendPaymentMessage;

        /**
         * Encodes the specified SendPaymentMessage message. Does not implicitly {@link proto.SendPaymentMessage.verify|verify} messages.
         * @param message SendPaymentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPaymentMessage message, length delimited. Does not implicitly {@link proto.SendPaymentMessage.verify|verify} messages.
         * @param message SendPaymentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPaymentMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPaymentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendPaymentMessage;

        /**
         * Decodes a SendPaymentMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPaymentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendPaymentMessage;

        /**
         * Verifies a SendPaymentMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendPaymentMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendPaymentMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.SendPaymentMessage;

        /**
         * Creates a plain object from a SendPaymentMessage message. Also converts values to other types if specified.
         * @param message SendPaymentMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendPaymentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPaymentMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPaymentMessage. */
    interface IRequestPaymentMessage {

        /** RequestPaymentMessage noteMessage */
        noteMessage?: (proto.IMessage|null);

        /** RequestPaymentMessage currencyCodeIso4217 */
        currencyCodeIso4217?: (string|null);

        /** RequestPaymentMessage amount1000 */
        amount1000?: (number|Long|null);

        /** RequestPaymentMessage requestFrom */
        requestFrom?: (string|null);

        /** RequestPaymentMessage expiryTimestamp */
        expiryTimestamp?: (number|Long|null);

        /** RequestPaymentMessage amount */
        amount?: (proto.IMoney|null);

        /** RequestPaymentMessage background */
        background?: (proto.IPaymentBackground|null);
    }

    /** Represents a RequestPaymentMessage. */
    class RequestPaymentMessage implements IRequestPaymentMessage {

        /**
         * Constructs a new RequestPaymentMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRequestPaymentMessage);

        /** RequestPaymentMessage noteMessage. */
        public noteMessage?: (proto.IMessage|null);

        /** RequestPaymentMessage currencyCodeIso4217. */
        public currencyCodeIso4217: string;

        /** RequestPaymentMessage amount1000. */
        public amount1000: (number|Long);

        /** RequestPaymentMessage requestFrom. */
        public requestFrom: string;

        /** RequestPaymentMessage expiryTimestamp. */
        public expiryTimestamp: (number|Long);

        /** RequestPaymentMessage amount. */
        public amount?: (proto.IMoney|null);

        /** RequestPaymentMessage background. */
        public background?: (proto.IPaymentBackground|null);

        /**
         * Creates a new RequestPaymentMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPaymentMessage instance
         */
        public static create(properties?: proto.IRequestPaymentMessage): proto.RequestPaymentMessage;

        /**
         * Encodes the specified RequestPaymentMessage message. Does not implicitly {@link proto.RequestPaymentMessage.verify|verify} messages.
         * @param message RequestPaymentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRequestPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPaymentMessage message, length delimited. Does not implicitly {@link proto.RequestPaymentMessage.verify|verify} messages.
         * @param message RequestPaymentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRequestPaymentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPaymentMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPaymentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RequestPaymentMessage;

        /**
         * Decodes a RequestPaymentMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPaymentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RequestPaymentMessage;

        /**
         * Verifies a RequestPaymentMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPaymentMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPaymentMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.RequestPaymentMessage;

        /**
         * Creates a plain object from a RequestPaymentMessage message. Also converts values to other types if specified.
         * @param message RequestPaymentMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RequestPaymentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPaymentMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeclinePaymentRequestMessage. */
    interface IDeclinePaymentRequestMessage {

        /** DeclinePaymentRequestMessage key */
        key?: (proto.IMessageKey|null);
    }

    /** Represents a DeclinePaymentRequestMessage. */
    class DeclinePaymentRequestMessage implements IDeclinePaymentRequestMessage {

        /**
         * Constructs a new DeclinePaymentRequestMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDeclinePaymentRequestMessage);

        /** DeclinePaymentRequestMessage key. */
        public key?: (proto.IMessageKey|null);

        /**
         * Creates a new DeclinePaymentRequestMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeclinePaymentRequestMessage instance
         */
        public static create(properties?: proto.IDeclinePaymentRequestMessage): proto.DeclinePaymentRequestMessage;

        /**
         * Encodes the specified DeclinePaymentRequestMessage message. Does not implicitly {@link proto.DeclinePaymentRequestMessage.verify|verify} messages.
         * @param message DeclinePaymentRequestMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDeclinePaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeclinePaymentRequestMessage message, length delimited. Does not implicitly {@link proto.DeclinePaymentRequestMessage.verify|verify} messages.
         * @param message DeclinePaymentRequestMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDeclinePaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeclinePaymentRequestMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeclinePaymentRequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DeclinePaymentRequestMessage;

        /**
         * Decodes a DeclinePaymentRequestMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeclinePaymentRequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DeclinePaymentRequestMessage;

        /**
         * Verifies a DeclinePaymentRequestMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeclinePaymentRequestMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeclinePaymentRequestMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.DeclinePaymentRequestMessage;

        /**
         * Creates a plain object from a DeclinePaymentRequestMessage message. Also converts values to other types if specified.
         * @param message DeclinePaymentRequestMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DeclinePaymentRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeclinePaymentRequestMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelPaymentRequestMessage. */
    interface ICancelPaymentRequestMessage {

        /** CancelPaymentRequestMessage key */
        key?: (proto.IMessageKey|null);
    }

    /** Represents a CancelPaymentRequestMessage. */
    class CancelPaymentRequestMessage implements ICancelPaymentRequestMessage {

        /**
         * Constructs a new CancelPaymentRequestMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICancelPaymentRequestMessage);

        /** CancelPaymentRequestMessage key. */
        public key?: (proto.IMessageKey|null);

        /**
         * Creates a new CancelPaymentRequestMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelPaymentRequestMessage instance
         */
        public static create(properties?: proto.ICancelPaymentRequestMessage): proto.CancelPaymentRequestMessage;

        /**
         * Encodes the specified CancelPaymentRequestMessage message. Does not implicitly {@link proto.CancelPaymentRequestMessage.verify|verify} messages.
         * @param message CancelPaymentRequestMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICancelPaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelPaymentRequestMessage message, length delimited. Does not implicitly {@link proto.CancelPaymentRequestMessage.verify|verify} messages.
         * @param message CancelPaymentRequestMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICancelPaymentRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelPaymentRequestMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelPaymentRequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CancelPaymentRequestMessage;

        /**
         * Decodes a CancelPaymentRequestMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelPaymentRequestMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CancelPaymentRequestMessage;

        /**
         * Verifies a CancelPaymentRequestMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelPaymentRequestMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelPaymentRequestMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.CancelPaymentRequestMessage;

        /**
         * Creates a plain object from a CancelPaymentRequestMessage message. Also converts values to other types if specified.
         * @param message CancelPaymentRequestMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CancelPaymentRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelPaymentRequestMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaymentInviteMessage. */
    interface IPaymentInviteMessage {

        /** PaymentInviteMessage serviceType */
        serviceType?: (proto.PaymentInviteMessage.PaymentInviteMessageServiceType|null);

        /** PaymentInviteMessage expiryTimestamp */
        expiryTimestamp?: (number|Long|null);
    }

    /** Represents a PaymentInviteMessage. */
    class PaymentInviteMessage implements IPaymentInviteMessage {

        /**
         * Constructs a new PaymentInviteMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPaymentInviteMessage);

        /** PaymentInviteMessage serviceType. */
        public serviceType: proto.PaymentInviteMessage.PaymentInviteMessageServiceType;

        /** PaymentInviteMessage expiryTimestamp. */
        public expiryTimestamp: (number|Long);

        /**
         * Creates a new PaymentInviteMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymentInviteMessage instance
         */
        public static create(properties?: proto.IPaymentInviteMessage): proto.PaymentInviteMessage;

        /**
         * Encodes the specified PaymentInviteMessage message. Does not implicitly {@link proto.PaymentInviteMessage.verify|verify} messages.
         * @param message PaymentInviteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPaymentInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymentInviteMessage message, length delimited. Does not implicitly {@link proto.PaymentInviteMessage.verify|verify} messages.
         * @param message PaymentInviteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPaymentInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymentInviteMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymentInviteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PaymentInviteMessage;

        /**
         * Decodes a PaymentInviteMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymentInviteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PaymentInviteMessage;

        /**
         * Verifies a PaymentInviteMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymentInviteMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymentInviteMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.PaymentInviteMessage;

        /**
         * Creates a plain object from a PaymentInviteMessage message. Also converts values to other types if specified.
         * @param message PaymentInviteMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PaymentInviteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymentInviteMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PaymentInviteMessage {

        /** PaymentInviteMessageServiceType enum. */
        enum PaymentInviteMessageServiceType {
            UNKNOWN = 0,
            FBPAY = 1,
            NOVI = 2,
            UPI = 3
        }
    }

    /** Properties of a LiveLocationMessage. */
    interface ILiveLocationMessage {

        /** LiveLocationMessage degreesLatitude */
        degreesLatitude?: (number|null);

        /** LiveLocationMessage degreesLongitude */
        degreesLongitude?: (number|null);

        /** LiveLocationMessage accuracyInMeters */
        accuracyInMeters?: (number|null);

        /** LiveLocationMessage speedInMps */
        speedInMps?: (number|null);

        /** LiveLocationMessage degreesClockwiseFromMagneticNorth */
        degreesClockwiseFromMagneticNorth?: (number|null);

        /** LiveLocationMessage caption */
        caption?: (string|null);

        /** LiveLocationMessage sequenceNumber */
        sequenceNumber?: (number|Long|null);

        /** LiveLocationMessage timeOffset */
        timeOffset?: (number|null);

        /** LiveLocationMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** LiveLocationMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a LiveLocationMessage. */
    class LiveLocationMessage implements ILiveLocationMessage {

        /**
         * Constructs a new LiveLocationMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILiveLocationMessage);

        /** LiveLocationMessage degreesLatitude. */
        public degreesLatitude: number;

        /** LiveLocationMessage degreesLongitude. */
        public degreesLongitude: number;

        /** LiveLocationMessage accuracyInMeters. */
        public accuracyInMeters: number;

        /** LiveLocationMessage speedInMps. */
        public speedInMps: number;

        /** LiveLocationMessage degreesClockwiseFromMagneticNorth. */
        public degreesClockwiseFromMagneticNorth: number;

        /** LiveLocationMessage caption. */
        public caption: string;

        /** LiveLocationMessage sequenceNumber. */
        public sequenceNumber: (number|Long);

        /** LiveLocationMessage timeOffset. */
        public timeOffset: number;

        /** LiveLocationMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** LiveLocationMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new LiveLocationMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LiveLocationMessage instance
         */
        public static create(properties?: proto.ILiveLocationMessage): proto.LiveLocationMessage;

        /**
         * Encodes the specified LiveLocationMessage message. Does not implicitly {@link proto.LiveLocationMessage.verify|verify} messages.
         * @param message LiveLocationMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILiveLocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LiveLocationMessage message, length delimited. Does not implicitly {@link proto.LiveLocationMessage.verify|verify} messages.
         * @param message LiveLocationMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILiveLocationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LiveLocationMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LiveLocationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LiveLocationMessage;

        /**
         * Decodes a LiveLocationMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LiveLocationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LiveLocationMessage;

        /**
         * Verifies a LiveLocationMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LiveLocationMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LiveLocationMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.LiveLocationMessage;

        /**
         * Creates a plain object from a LiveLocationMessage message. Also converts values to other types if specified.
         * @param message LiveLocationMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LiveLocationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LiveLocationMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StickerMessage. */
    interface IStickerMessage {

        /** StickerMessage url */
        url?: (string|null);

        /** StickerMessage fileSha256 */
        fileSha256?: (Uint8Array|null);

        /** StickerMessage fileEncSha256 */
        fileEncSha256?: (Uint8Array|null);

        /** StickerMessage mediaKey */
        mediaKey?: (Uint8Array|null);

        /** StickerMessage mimetype */
        mimetype?: (string|null);

        /** StickerMessage height */
        height?: (number|null);

        /** StickerMessage width */
        width?: (number|null);

        /** StickerMessage directPath */
        directPath?: (string|null);

        /** StickerMessage fileLength */
        fileLength?: (number|Long|null);

        /** StickerMessage mediaKeyTimestamp */
        mediaKeyTimestamp?: (number|Long|null);

        /** StickerMessage firstFrameLength */
        firstFrameLength?: (number|null);

        /** StickerMessage firstFrameSidecar */
        firstFrameSidecar?: (Uint8Array|null);

        /** StickerMessage isAnimated */
        isAnimated?: (boolean|null);

        /** StickerMessage pngThumbnail */
        pngThumbnail?: (Uint8Array|null);

        /** StickerMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a StickerMessage. */
    class StickerMessage implements IStickerMessage {

        /**
         * Constructs a new StickerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStickerMessage);

        /** StickerMessage url. */
        public url: string;

        /** StickerMessage fileSha256. */
        public fileSha256: Uint8Array;

        /** StickerMessage fileEncSha256. */
        public fileEncSha256: Uint8Array;

        /** StickerMessage mediaKey. */
        public mediaKey: Uint8Array;

        /** StickerMessage mimetype. */
        public mimetype: string;

        /** StickerMessage height. */
        public height: number;

        /** StickerMessage width. */
        public width: number;

        /** StickerMessage directPath. */
        public directPath: string;

        /** StickerMessage fileLength. */
        public fileLength: (number|Long);

        /** StickerMessage mediaKeyTimestamp. */
        public mediaKeyTimestamp: (number|Long);

        /** StickerMessage firstFrameLength. */
        public firstFrameLength: number;

        /** StickerMessage firstFrameSidecar. */
        public firstFrameSidecar: Uint8Array;

        /** StickerMessage isAnimated. */
        public isAnimated: boolean;

        /** StickerMessage pngThumbnail. */
        public pngThumbnail: Uint8Array;

        /** StickerMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new StickerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StickerMessage instance
         */
        public static create(properties?: proto.IStickerMessage): proto.StickerMessage;

        /**
         * Encodes the specified StickerMessage message. Does not implicitly {@link proto.StickerMessage.verify|verify} messages.
         * @param message StickerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStickerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StickerMessage message, length delimited. Does not implicitly {@link proto.StickerMessage.verify|verify} messages.
         * @param message StickerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStickerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StickerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StickerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StickerMessage;

        /**
         * Decodes a StickerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StickerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StickerMessage;

        /**
         * Verifies a StickerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StickerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StickerMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.StickerMessage;

        /**
         * Creates a plain object from a StickerMessage message. Also converts values to other types if specified.
         * @param message StickerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StickerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StickerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FourRowTemplate. */
    interface IFourRowTemplate {

        /** FourRowTemplate content */
        content?: (proto.IHighlyStructuredMessage|null);

        /** FourRowTemplate footer */
        footer?: (proto.IHighlyStructuredMessage|null);

        /** FourRowTemplate buttons */
        buttons?: (proto.ITemplateButton[]|null);

        /** FourRowTemplate documentMessage */
        documentMessage?: (proto.IDocumentMessage|null);

        /** FourRowTemplate highlyStructuredMessage */
        highlyStructuredMessage?: (proto.IHighlyStructuredMessage|null);

        /** FourRowTemplate imageMessage */
        imageMessage?: (proto.IImageMessage|null);

        /** FourRowTemplate videoMessage */
        videoMessage?: (proto.IVideoMessage|null);

        /** FourRowTemplate locationMessage */
        locationMessage?: (proto.ILocationMessage|null);
    }

    /** Represents a FourRowTemplate. */
    class FourRowTemplate implements IFourRowTemplate {

        /**
         * Constructs a new FourRowTemplate.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFourRowTemplate);

        /** FourRowTemplate content. */
        public content?: (proto.IHighlyStructuredMessage|null);

        /** FourRowTemplate footer. */
        public footer?: (proto.IHighlyStructuredMessage|null);

        /** FourRowTemplate buttons. */
        public buttons: proto.ITemplateButton[];

        /** FourRowTemplate documentMessage. */
        public documentMessage?: (proto.IDocumentMessage|null);

        /** FourRowTemplate highlyStructuredMessage. */
        public highlyStructuredMessage?: (proto.IHighlyStructuredMessage|null);

        /** FourRowTemplate imageMessage. */
        public imageMessage?: (proto.IImageMessage|null);

        /** FourRowTemplate videoMessage. */
        public videoMessage?: (proto.IVideoMessage|null);

        /** FourRowTemplate locationMessage. */
        public locationMessage?: (proto.ILocationMessage|null);

        /** FourRowTemplate title. */
        public title?: ("documentMessage"|"highlyStructuredMessage"|"imageMessage"|"videoMessage"|"locationMessage");

        /**
         * Creates a new FourRowTemplate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FourRowTemplate instance
         */
        public static create(properties?: proto.IFourRowTemplate): proto.FourRowTemplate;

        /**
         * Encodes the specified FourRowTemplate message. Does not implicitly {@link proto.FourRowTemplate.verify|verify} messages.
         * @param message FourRowTemplate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FourRowTemplate message, length delimited. Does not implicitly {@link proto.FourRowTemplate.verify|verify} messages.
         * @param message FourRowTemplate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FourRowTemplate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FourRowTemplate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FourRowTemplate;

        /**
         * Decodes a FourRowTemplate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FourRowTemplate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FourRowTemplate;

        /**
         * Verifies a FourRowTemplate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FourRowTemplate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FourRowTemplate
         */
        public static fromObject(object: { [k: string]: any }): proto.FourRowTemplate;

        /**
         * Creates a plain object from a FourRowTemplate message. Also converts values to other types if specified.
         * @param message FourRowTemplate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FourRowTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FourRowTemplate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HydratedFourRowTemplate. */
    interface IHydratedFourRowTemplate {

        /** HydratedFourRowTemplate hydratedContentText */
        hydratedContentText?: (string|null);

        /** HydratedFourRowTemplate hydratedFooterText */
        hydratedFooterText?: (string|null);

        /** HydratedFourRowTemplate hydratedButtons */
        hydratedButtons?: (proto.IHydratedTemplateButton[]|null);

        /** HydratedFourRowTemplate templateId */
        templateId?: (string|null);

        /** HydratedFourRowTemplate documentMessage */
        documentMessage?: (proto.IDocumentMessage|null);

        /** HydratedFourRowTemplate hydratedTitleText */
        hydratedTitleText?: (string|null);

        /** HydratedFourRowTemplate imageMessage */
        imageMessage?: (proto.IImageMessage|null);

        /** HydratedFourRowTemplate videoMessage */
        videoMessage?: (proto.IVideoMessage|null);

        /** HydratedFourRowTemplate locationMessage */
        locationMessage?: (proto.ILocationMessage|null);
    }

    /** Represents a HydratedFourRowTemplate. */
    class HydratedFourRowTemplate implements IHydratedFourRowTemplate {

        /**
         * Constructs a new HydratedFourRowTemplate.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHydratedFourRowTemplate);

        /** HydratedFourRowTemplate hydratedContentText. */
        public hydratedContentText: string;

        /** HydratedFourRowTemplate hydratedFooterText. */
        public hydratedFooterText: string;

        /** HydratedFourRowTemplate hydratedButtons. */
        public hydratedButtons: proto.IHydratedTemplateButton[];

        /** HydratedFourRowTemplate templateId. */
        public templateId: string;

        /** HydratedFourRowTemplate documentMessage. */
        public documentMessage?: (proto.IDocumentMessage|null);

        /** HydratedFourRowTemplate hydratedTitleText. */
        public hydratedTitleText?: (string|null);

        /** HydratedFourRowTemplate imageMessage. */
        public imageMessage?: (proto.IImageMessage|null);

        /** HydratedFourRowTemplate videoMessage. */
        public videoMessage?: (proto.IVideoMessage|null);

        /** HydratedFourRowTemplate locationMessage. */
        public locationMessage?: (proto.ILocationMessage|null);

        /** HydratedFourRowTemplate title. */
        public title?: ("documentMessage"|"hydratedTitleText"|"imageMessage"|"videoMessage"|"locationMessage");

        /**
         * Creates a new HydratedFourRowTemplate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HydratedFourRowTemplate instance
         */
        public static create(properties?: proto.IHydratedFourRowTemplate): proto.HydratedFourRowTemplate;

        /**
         * Encodes the specified HydratedFourRowTemplate message. Does not implicitly {@link proto.HydratedFourRowTemplate.verify|verify} messages.
         * @param message HydratedFourRowTemplate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHydratedFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HydratedFourRowTemplate message, length delimited. Does not implicitly {@link proto.HydratedFourRowTemplate.verify|verify} messages.
         * @param message HydratedFourRowTemplate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHydratedFourRowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HydratedFourRowTemplate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HydratedFourRowTemplate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HydratedFourRowTemplate;

        /**
         * Decodes a HydratedFourRowTemplate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HydratedFourRowTemplate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HydratedFourRowTemplate;

        /**
         * Verifies a HydratedFourRowTemplate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HydratedFourRowTemplate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HydratedFourRowTemplate
         */
        public static fromObject(object: { [k: string]: any }): proto.HydratedFourRowTemplate;

        /**
         * Creates a plain object from a HydratedFourRowTemplate message. Also converts values to other types if specified.
         * @param message HydratedFourRowTemplate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HydratedFourRowTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HydratedFourRowTemplate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TemplateMessage. */
    interface ITemplateMessage {

        /** TemplateMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** TemplateMessage hydratedTemplate */
        hydratedTemplate?: (proto.IHydratedFourRowTemplate|null);

        /** TemplateMessage fourRowTemplate */
        fourRowTemplate?: (proto.IFourRowTemplate|null);

        /** TemplateMessage hydratedFourRowTemplate */
        hydratedFourRowTemplate?: (proto.IHydratedFourRowTemplate|null);
    }

    /** Represents a TemplateMessage. */
    class TemplateMessage implements ITemplateMessage {

        /**
         * Constructs a new TemplateMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITemplateMessage);

        /** TemplateMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** TemplateMessage hydratedTemplate. */
        public hydratedTemplate?: (proto.IHydratedFourRowTemplate|null);

        /** TemplateMessage fourRowTemplate. */
        public fourRowTemplate?: (proto.IFourRowTemplate|null);

        /** TemplateMessage hydratedFourRowTemplate. */
        public hydratedFourRowTemplate?: (proto.IHydratedFourRowTemplate|null);

        /** TemplateMessage format. */
        public format?: ("fourRowTemplate"|"hydratedFourRowTemplate");

        /**
         * Creates a new TemplateMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateMessage instance
         */
        public static create(properties?: proto.ITemplateMessage): proto.TemplateMessage;

        /**
         * Encodes the specified TemplateMessage message. Does not implicitly {@link proto.TemplateMessage.verify|verify} messages.
         * @param message TemplateMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITemplateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateMessage message, length delimited. Does not implicitly {@link proto.TemplateMessage.verify|verify} messages.
         * @param message TemplateMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITemplateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TemplateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TemplateMessage;

        /**
         * Decodes a TemplateMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TemplateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TemplateMessage;

        /**
         * Verifies a TemplateMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.TemplateMessage;

        /**
         * Creates a plain object from a TemplateMessage message. Also converts values to other types if specified.
         * @param message TemplateMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TemplateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TemplateButtonReplyMessage. */
    interface ITemplateButtonReplyMessage {

        /** TemplateButtonReplyMessage selectedId */
        selectedId?: (string|null);

        /** TemplateButtonReplyMessage selectedDisplayText */
        selectedDisplayText?: (string|null);

        /** TemplateButtonReplyMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** TemplateButtonReplyMessage selectedIndex */
        selectedIndex?: (number|null);
    }

    /** Represents a TemplateButtonReplyMessage. */
    class TemplateButtonReplyMessage implements ITemplateButtonReplyMessage {

        /**
         * Constructs a new TemplateButtonReplyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITemplateButtonReplyMessage);

        /** TemplateButtonReplyMessage selectedId. */
        public selectedId: string;

        /** TemplateButtonReplyMessage selectedDisplayText. */
        public selectedDisplayText: string;

        /** TemplateButtonReplyMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** TemplateButtonReplyMessage selectedIndex. */
        public selectedIndex: number;

        /**
         * Creates a new TemplateButtonReplyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TemplateButtonReplyMessage instance
         */
        public static create(properties?: proto.ITemplateButtonReplyMessage): proto.TemplateButtonReplyMessage;

        /**
         * Encodes the specified TemplateButtonReplyMessage message. Does not implicitly {@link proto.TemplateButtonReplyMessage.verify|verify} messages.
         * @param message TemplateButtonReplyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITemplateButtonReplyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TemplateButtonReplyMessage message, length delimited. Does not implicitly {@link proto.TemplateButtonReplyMessage.verify|verify} messages.
         * @param message TemplateButtonReplyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITemplateButtonReplyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TemplateButtonReplyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TemplateButtonReplyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TemplateButtonReplyMessage;

        /**
         * Decodes a TemplateButtonReplyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TemplateButtonReplyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TemplateButtonReplyMessage;

        /**
         * Verifies a TemplateButtonReplyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TemplateButtonReplyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TemplateButtonReplyMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.TemplateButtonReplyMessage;

        /**
         * Creates a plain object from a TemplateButtonReplyMessage message. Also converts values to other types if specified.
         * @param message TemplateButtonReplyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TemplateButtonReplyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TemplateButtonReplyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CatalogSnapshot. */
    interface ICatalogSnapshot {

        /** CatalogSnapshot catalogImage */
        catalogImage?: (proto.IImageMessage|null);

        /** CatalogSnapshot title */
        title?: (string|null);

        /** CatalogSnapshot description */
        description?: (string|null);
    }

    /** Represents a CatalogSnapshot. */
    class CatalogSnapshot implements ICatalogSnapshot {

        /**
         * Constructs a new CatalogSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICatalogSnapshot);

        /** CatalogSnapshot catalogImage. */
        public catalogImage?: (proto.IImageMessage|null);

        /** CatalogSnapshot title. */
        public title: string;

        /** CatalogSnapshot description. */
        public description: string;

        /**
         * Creates a new CatalogSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CatalogSnapshot instance
         */
        public static create(properties?: proto.ICatalogSnapshot): proto.CatalogSnapshot;

        /**
         * Encodes the specified CatalogSnapshot message. Does not implicitly {@link proto.CatalogSnapshot.verify|verify} messages.
         * @param message CatalogSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICatalogSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CatalogSnapshot message, length delimited. Does not implicitly {@link proto.CatalogSnapshot.verify|verify} messages.
         * @param message CatalogSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICatalogSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CatalogSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CatalogSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CatalogSnapshot;

        /**
         * Decodes a CatalogSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CatalogSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CatalogSnapshot;

        /**
         * Verifies a CatalogSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CatalogSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CatalogSnapshot
         */
        public static fromObject(object: { [k: string]: any }): proto.CatalogSnapshot;

        /**
         * Creates a plain object from a CatalogSnapshot message. Also converts values to other types if specified.
         * @param message CatalogSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CatalogSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CatalogSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductSnapshot. */
    interface IProductSnapshot {

        /** ProductSnapshot productImage */
        productImage?: (proto.IImageMessage|null);

        /** ProductSnapshot productId */
        productId?: (string|null);

        /** ProductSnapshot title */
        title?: (string|null);

        /** ProductSnapshot description */
        description?: (string|null);

        /** ProductSnapshot currencyCode */
        currencyCode?: (string|null);

        /** ProductSnapshot priceAmount1000 */
        priceAmount1000?: (number|Long|null);

        /** ProductSnapshot retailerId */
        retailerId?: (string|null);

        /** ProductSnapshot url */
        url?: (string|null);

        /** ProductSnapshot productImageCount */
        productImageCount?: (number|null);

        /** ProductSnapshot firstImageId */
        firstImageId?: (string|null);

        /** ProductSnapshot salePriceAmount1000 */
        salePriceAmount1000?: (number|Long|null);
    }

    /** Represents a ProductSnapshot. */
    class ProductSnapshot implements IProductSnapshot {

        /**
         * Constructs a new ProductSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProductSnapshot);

        /** ProductSnapshot productImage. */
        public productImage?: (proto.IImageMessage|null);

        /** ProductSnapshot productId. */
        public productId: string;

        /** ProductSnapshot title. */
        public title: string;

        /** ProductSnapshot description. */
        public description: string;

        /** ProductSnapshot currencyCode. */
        public currencyCode: string;

        /** ProductSnapshot priceAmount1000. */
        public priceAmount1000: (number|Long);

        /** ProductSnapshot retailerId. */
        public retailerId: string;

        /** ProductSnapshot url. */
        public url: string;

        /** ProductSnapshot productImageCount. */
        public productImageCount: number;

        /** ProductSnapshot firstImageId. */
        public firstImageId: string;

        /** ProductSnapshot salePriceAmount1000. */
        public salePriceAmount1000: (number|Long);

        /**
         * Creates a new ProductSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductSnapshot instance
         */
        public static create(properties?: proto.IProductSnapshot): proto.ProductSnapshot;

        /**
         * Encodes the specified ProductSnapshot message. Does not implicitly {@link proto.ProductSnapshot.verify|verify} messages.
         * @param message ProductSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProductSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductSnapshot message, length delimited. Does not implicitly {@link proto.ProductSnapshot.verify|verify} messages.
         * @param message ProductSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProductSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProductSnapshot;

        /**
         * Decodes a ProductSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProductSnapshot;

        /**
         * Verifies a ProductSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductSnapshot
         */
        public static fromObject(object: { [k: string]: any }): proto.ProductSnapshot;

        /**
         * Creates a plain object from a ProductSnapshot message. Also converts values to other types if specified.
         * @param message ProductSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ProductSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductSnapshot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductMessage. */
    interface IProductMessage {

        /** ProductMessage product */
        product?: (proto.IProductSnapshot|null);

        /** ProductMessage businessOwnerJid */
        businessOwnerJid?: (string|null);

        /** ProductMessage catalog */
        catalog?: (proto.ICatalogSnapshot|null);

        /** ProductMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a ProductMessage. */
    class ProductMessage implements IProductMessage {

        /**
         * Constructs a new ProductMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProductMessage);

        /** ProductMessage product. */
        public product?: (proto.IProductSnapshot|null);

        /** ProductMessage businessOwnerJid. */
        public businessOwnerJid: string;

        /** ProductMessage catalog. */
        public catalog?: (proto.ICatalogSnapshot|null);

        /** ProductMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new ProductMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductMessage instance
         */
        public static create(properties?: proto.IProductMessage): proto.ProductMessage;

        /**
         * Encodes the specified ProductMessage message. Does not implicitly {@link proto.ProductMessage.verify|verify} messages.
         * @param message ProductMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProductMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductMessage message, length delimited. Does not implicitly {@link proto.ProductMessage.verify|verify} messages.
         * @param message ProductMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProductMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProductMessage;

        /**
         * Decodes a ProductMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProductMessage;

        /**
         * Verifies a ProductMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ProductMessage;

        /**
         * Creates a plain object from a ProductMessage message. Also converts values to other types if specified.
         * @param message ProductMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ProductMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OrderMessage. */
    interface IOrderMessage {

        /** OrderMessage orderId */
        orderId?: (string|null);

        /** OrderMessage thumbnail */
        thumbnail?: (Uint8Array|null);

        /** OrderMessage itemCount */
        itemCount?: (number|null);

        /** OrderMessage status */
        status?: (proto.OrderMessage.OrderMessageOrderStatus|null);

        /** OrderMessage surface */
        surface?: (proto.OrderMessage.OrderMessageOrderSurface|null);

        /** OrderMessage message */
        message?: (string|null);

        /** OrderMessage orderTitle */
        orderTitle?: (string|null);

        /** OrderMessage sellerJid */
        sellerJid?: (string|null);

        /** OrderMessage token */
        token?: (string|null);

        /** OrderMessage totalAmount1000 */
        totalAmount1000?: (number|Long|null);

        /** OrderMessage totalCurrencyCode */
        totalCurrencyCode?: (string|null);

        /** OrderMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents an OrderMessage. */
    class OrderMessage implements IOrderMessage {

        /**
         * Constructs a new OrderMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IOrderMessage);

        /** OrderMessage orderId. */
        public orderId: string;

        /** OrderMessage thumbnail. */
        public thumbnail: Uint8Array;

        /** OrderMessage itemCount. */
        public itemCount: number;

        /** OrderMessage status. */
        public status: proto.OrderMessage.OrderMessageOrderStatus;

        /** OrderMessage surface. */
        public surface: proto.OrderMessage.OrderMessageOrderSurface;

        /** OrderMessage message. */
        public message: string;

        /** OrderMessage orderTitle. */
        public orderTitle: string;

        /** OrderMessage sellerJid. */
        public sellerJid: string;

        /** OrderMessage token. */
        public token: string;

        /** OrderMessage totalAmount1000. */
        public totalAmount1000: (number|Long);

        /** OrderMessage totalCurrencyCode. */
        public totalCurrencyCode: string;

        /** OrderMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new OrderMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderMessage instance
         */
        public static create(properties?: proto.IOrderMessage): proto.OrderMessage;

        /**
         * Encodes the specified OrderMessage message. Does not implicitly {@link proto.OrderMessage.verify|verify} messages.
         * @param message OrderMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IOrderMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderMessage message, length delimited. Does not implicitly {@link proto.OrderMessage.verify|verify} messages.
         * @param message OrderMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IOrderMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.OrderMessage;

        /**
         * Decodes an OrderMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.OrderMessage;

        /**
         * Verifies an OrderMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.OrderMessage;

        /**
         * Creates a plain object from an OrderMessage message. Also converts values to other types if specified.
         * @param message OrderMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.OrderMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace OrderMessage {

        /** OrderMessageOrderStatus enum. */
        enum OrderMessageOrderStatus {
            INQUIRY = 1
        }

        /** OrderMessageOrderSurface enum. */
        enum OrderMessageOrderSurface {
            CATALOG = 1
        }
    }

    /** Properties of a Row. */
    interface IRow {

        /** Row title */
        title?: (string|null);

        /** Row description */
        description?: (string|null);

        /** Row rowId */
        rowId?: (string|null);
    }

    /** Represents a Row. */
    class Row implements IRow {

        /**
         * Constructs a new Row.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRow);

        /** Row title. */
        public title: string;

        /** Row description. */
        public description: string;

        /** Row rowId. */
        public rowId: string;

        /**
         * Creates a new Row instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Row instance
         */
        public static create(properties?: proto.IRow): proto.Row;

        /**
         * Encodes the specified Row message. Does not implicitly {@link proto.Row.verify|verify} messages.
         * @param message Row message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Row message, length delimited. Does not implicitly {@link proto.Row.verify|verify} messages.
         * @param message Row message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Row message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Row
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Row;

        /**
         * Decodes a Row message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Row
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Row;

        /**
         * Verifies a Row message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Row message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Row
         */
        public static fromObject(object: { [k: string]: any }): proto.Row;

        /**
         * Creates a plain object from a Row message. Also converts values to other types if specified.
         * @param message Row
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Row to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Section. */
    interface ISection {

        /** Section title */
        title?: (string|null);

        /** Section rows */
        rows?: (proto.IRow[]|null);
    }

    /** Represents a Section. */
    class Section implements ISection {

        /**
         * Constructs a new Section.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISection);

        /** Section title. */
        public title: string;

        /** Section rows. */
        public rows: proto.IRow[];

        /**
         * Creates a new Section instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Section instance
         */
        public static create(properties?: proto.ISection): proto.Section;

        /**
         * Encodes the specified Section message. Does not implicitly {@link proto.Section.verify|verify} messages.
         * @param message Section message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Section message, length delimited. Does not implicitly {@link proto.Section.verify|verify} messages.
         * @param message Section message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Section message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Section
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Section;

        /**
         * Decodes a Section message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Section
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Section;

        /**
         * Verifies a Section message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Section message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Section
         */
        public static fromObject(object: { [k: string]: any }): proto.Section;

        /**
         * Creates a plain object from a Section message. Also converts values to other types if specified.
         * @param message Section
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Section, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Section to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Product. */
    interface IProduct {

        /** Product productId */
        productId?: (string|null);
    }

    /** Represents a Product. */
    class Product implements IProduct {

        /**
         * Constructs a new Product.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProduct);

        /** Product productId. */
        public productId: string;

        /**
         * Creates a new Product instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Product instance
         */
        public static create(properties?: proto.IProduct): proto.Product;

        /**
         * Encodes the specified Product message. Does not implicitly {@link proto.Product.verify|verify} messages.
         * @param message Product message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link proto.Product.verify|verify} messages.
         * @param message Product message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Product;

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Product;

        /**
         * Verifies a Product message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Product
         */
        public static fromObject(object: { [k: string]: any }): proto.Product;

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @param message Product
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Product to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductSection. */
    interface IProductSection {

        /** ProductSection title */
        title?: (string|null);

        /** ProductSection products */
        products?: (proto.IProduct[]|null);
    }

    /** Represents a ProductSection. */
    class ProductSection implements IProductSection {

        /**
         * Constructs a new ProductSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProductSection);

        /** ProductSection title. */
        public title: string;

        /** ProductSection products. */
        public products: proto.IProduct[];

        /**
         * Creates a new ProductSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductSection instance
         */
        public static create(properties?: proto.IProductSection): proto.ProductSection;

        /**
         * Encodes the specified ProductSection message. Does not implicitly {@link proto.ProductSection.verify|verify} messages.
         * @param message ProductSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProductSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductSection message, length delimited. Does not implicitly {@link proto.ProductSection.verify|verify} messages.
         * @param message ProductSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProductSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProductSection;

        /**
         * Decodes a ProductSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProductSection;

        /**
         * Verifies a ProductSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductSection
         */
        public static fromObject(object: { [k: string]: any }): proto.ProductSection;

        /**
         * Creates a plain object from a ProductSection message. Also converts values to other types if specified.
         * @param message ProductSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ProductSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductListHeaderImage. */
    interface IProductListHeaderImage {

        /** ProductListHeaderImage productId */
        productId?: (string|null);

        /** ProductListHeaderImage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);
    }

    /** Represents a ProductListHeaderImage. */
    class ProductListHeaderImage implements IProductListHeaderImage {

        /**
         * Constructs a new ProductListHeaderImage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProductListHeaderImage);

        /** ProductListHeaderImage productId. */
        public productId: string;

        /** ProductListHeaderImage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /**
         * Creates a new ProductListHeaderImage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductListHeaderImage instance
         */
        public static create(properties?: proto.IProductListHeaderImage): proto.ProductListHeaderImage;

        /**
         * Encodes the specified ProductListHeaderImage message. Does not implicitly {@link proto.ProductListHeaderImage.verify|verify} messages.
         * @param message ProductListHeaderImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProductListHeaderImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductListHeaderImage message, length delimited. Does not implicitly {@link proto.ProductListHeaderImage.verify|verify} messages.
         * @param message ProductListHeaderImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProductListHeaderImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductListHeaderImage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductListHeaderImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProductListHeaderImage;

        /**
         * Decodes a ProductListHeaderImage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductListHeaderImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProductListHeaderImage;

        /**
         * Verifies a ProductListHeaderImage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductListHeaderImage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductListHeaderImage
         */
        public static fromObject(object: { [k: string]: any }): proto.ProductListHeaderImage;

        /**
         * Creates a plain object from a ProductListHeaderImage message. Also converts values to other types if specified.
         * @param message ProductListHeaderImage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ProductListHeaderImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductListHeaderImage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProductListInfo. */
    interface IProductListInfo {

        /** ProductListInfo productSections */
        productSections?: (proto.IProductSection[]|null);

        /** ProductListInfo headerImage */
        headerImage?: (proto.IProductListHeaderImage|null);

        /** ProductListInfo businessOwnerJid */
        businessOwnerJid?: (string|null);
    }

    /** Represents a ProductListInfo. */
    class ProductListInfo implements IProductListInfo {

        /**
         * Constructs a new ProductListInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IProductListInfo);

        /** ProductListInfo productSections. */
        public productSections: proto.IProductSection[];

        /** ProductListInfo headerImage. */
        public headerImage?: (proto.IProductListHeaderImage|null);

        /** ProductListInfo businessOwnerJid. */
        public businessOwnerJid: string;

        /**
         * Creates a new ProductListInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProductListInfo instance
         */
        public static create(properties?: proto.IProductListInfo): proto.ProductListInfo;

        /**
         * Encodes the specified ProductListInfo message. Does not implicitly {@link proto.ProductListInfo.verify|verify} messages.
         * @param message ProductListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IProductListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProductListInfo message, length delimited. Does not implicitly {@link proto.ProductListInfo.verify|verify} messages.
         * @param message ProductListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IProductListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProductListInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProductListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ProductListInfo;

        /**
         * Decodes a ProductListInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProductListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ProductListInfo;

        /**
         * Verifies a ProductListInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProductListInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProductListInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.ProductListInfo;

        /**
         * Creates a plain object from a ProductListInfo message. Also converts values to other types if specified.
         * @param message ProductListInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ProductListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProductListInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListMessage. */
    interface IListMessage {

        /** ListMessage title */
        title?: (string|null);

        /** ListMessage description */
        description?: (string|null);

        /** ListMessage buttonText */
        buttonText?: (string|null);

        /** ListMessage listType */
        listType?: (proto.ListMessage.ListMessageListType|null);

        /** ListMessage sections */
        sections?: (proto.ISection[]|null);

        /** ListMessage productListInfo */
        productListInfo?: (proto.IProductListInfo|null);

        /** ListMessage footerText */
        footerText?: (string|null);

        /** ListMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a ListMessage. */
    class ListMessage implements IListMessage {

        /**
         * Constructs a new ListMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IListMessage);

        /** ListMessage title. */
        public title: string;

        /** ListMessage description. */
        public description: string;

        /** ListMessage buttonText. */
        public buttonText: string;

        /** ListMessage listType. */
        public listType: proto.ListMessage.ListMessageListType;

        /** ListMessage sections. */
        public sections: proto.ISection[];

        /** ListMessage productListInfo. */
        public productListInfo?: (proto.IProductListInfo|null);

        /** ListMessage footerText. */
        public footerText: string;

        /** ListMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new ListMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListMessage instance
         */
        public static create(properties?: proto.IListMessage): proto.ListMessage;

        /**
         * Encodes the specified ListMessage message. Does not implicitly {@link proto.ListMessage.verify|verify} messages.
         * @param message ListMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IListMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListMessage message, length delimited. Does not implicitly {@link proto.ListMessage.verify|verify} messages.
         * @param message ListMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IListMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ListMessage;

        /**
         * Decodes a ListMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ListMessage;

        /**
         * Verifies a ListMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ListMessage;

        /**
         * Creates a plain object from a ListMessage message. Also converts values to other types if specified.
         * @param message ListMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ListMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ListMessage {

        /** ListMessageListType enum. */
        enum ListMessageListType {
            UNKNOWN = 0,
            SINGLE_SELECT = 1,
            PRODUCT_LIST = 2
        }
    }

    /** Properties of a SingleSelectReply. */
    interface ISingleSelectReply {

        /** SingleSelectReply selectedRowId */
        selectedRowId?: (string|null);
    }

    /** Represents a SingleSelectReply. */
    class SingleSelectReply implements ISingleSelectReply {

        /**
         * Constructs a new SingleSelectReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISingleSelectReply);

        /** SingleSelectReply selectedRowId. */
        public selectedRowId: string;

        /**
         * Creates a new SingleSelectReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingleSelectReply instance
         */
        public static create(properties?: proto.ISingleSelectReply): proto.SingleSelectReply;

        /**
         * Encodes the specified SingleSelectReply message. Does not implicitly {@link proto.SingleSelectReply.verify|verify} messages.
         * @param message SingleSelectReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISingleSelectReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SingleSelectReply message, length delimited. Does not implicitly {@link proto.SingleSelectReply.verify|verify} messages.
         * @param message SingleSelectReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISingleSelectReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SingleSelectReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingleSelectReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SingleSelectReply;

        /**
         * Decodes a SingleSelectReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingleSelectReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SingleSelectReply;

        /**
         * Verifies a SingleSelectReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SingleSelectReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingleSelectReply
         */
        public static fromObject(object: { [k: string]: any }): proto.SingleSelectReply;

        /**
         * Creates a plain object from a SingleSelectReply message. Also converts values to other types if specified.
         * @param message SingleSelectReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SingleSelectReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SingleSelectReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListResponseMessage. */
    interface IListResponseMessage {

        /** ListResponseMessage title */
        title?: (string|null);

        /** ListResponseMessage listType */
        listType?: (proto.ListResponseMessage.ListResponseMessageListType|null);

        /** ListResponseMessage singleSelectReply */
        singleSelectReply?: (proto.ISingleSelectReply|null);

        /** ListResponseMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** ListResponseMessage description */
        description?: (string|null);
    }

    /** Represents a ListResponseMessage. */
    class ListResponseMessage implements IListResponseMessage {

        /**
         * Constructs a new ListResponseMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IListResponseMessage);

        /** ListResponseMessage title. */
        public title: string;

        /** ListResponseMessage listType. */
        public listType: proto.ListResponseMessage.ListResponseMessageListType;

        /** ListResponseMessage singleSelectReply. */
        public singleSelectReply?: (proto.ISingleSelectReply|null);

        /** ListResponseMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** ListResponseMessage description. */
        public description: string;

        /**
         * Creates a new ListResponseMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListResponseMessage instance
         */
        public static create(properties?: proto.IListResponseMessage): proto.ListResponseMessage;

        /**
         * Encodes the specified ListResponseMessage message. Does not implicitly {@link proto.ListResponseMessage.verify|verify} messages.
         * @param message ListResponseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IListResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListResponseMessage message, length delimited. Does not implicitly {@link proto.ListResponseMessage.verify|verify} messages.
         * @param message ListResponseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IListResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponseMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ListResponseMessage;

        /**
         * Decodes a ListResponseMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ListResponseMessage;

        /**
         * Verifies a ListResponseMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListResponseMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListResponseMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ListResponseMessage;

        /**
         * Creates a plain object from a ListResponseMessage message. Also converts values to other types if specified.
         * @param message ListResponseMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ListResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListResponseMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ListResponseMessage {

        /** ListResponseMessageListType enum. */
        enum ListResponseMessageListType {
            UNKNOWN = 0,
            SINGLE_SELECT = 1
        }
    }

    /** Properties of a GroupInviteMessage. */
    interface IGroupInviteMessage {

        /** GroupInviteMessage groupJid */
        groupJid?: (string|null);

        /** GroupInviteMessage inviteCode */
        inviteCode?: (string|null);

        /** GroupInviteMessage inviteExpiration */
        inviteExpiration?: (number|Long|null);

        /** GroupInviteMessage groupName */
        groupName?: (string|null);

        /** GroupInviteMessage jpegThumbnail */
        jpegThumbnail?: (Uint8Array|null);

        /** GroupInviteMessage caption */
        caption?: (string|null);

        /** GroupInviteMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);
    }

    /** Represents a GroupInviteMessage. */
    class GroupInviteMessage implements IGroupInviteMessage {

        /**
         * Constructs a new GroupInviteMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGroupInviteMessage);

        /** GroupInviteMessage groupJid. */
        public groupJid: string;

        /** GroupInviteMessage inviteCode. */
        public inviteCode: string;

        /** GroupInviteMessage inviteExpiration. */
        public inviteExpiration: (number|Long);

        /** GroupInviteMessage groupName. */
        public groupName: string;

        /** GroupInviteMessage jpegThumbnail. */
        public jpegThumbnail: Uint8Array;

        /** GroupInviteMessage caption. */
        public caption: string;

        /** GroupInviteMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /**
         * Creates a new GroupInviteMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GroupInviteMessage instance
         */
        public static create(properties?: proto.IGroupInviteMessage): proto.GroupInviteMessage;

        /**
         * Encodes the specified GroupInviteMessage message. Does not implicitly {@link proto.GroupInviteMessage.verify|verify} messages.
         * @param message GroupInviteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGroupInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GroupInviteMessage message, length delimited. Does not implicitly {@link proto.GroupInviteMessage.verify|verify} messages.
         * @param message GroupInviteMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGroupInviteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroupInviteMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GroupInviteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GroupInviteMessage;

        /**
         * Decodes a GroupInviteMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GroupInviteMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GroupInviteMessage;

        /**
         * Verifies a GroupInviteMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GroupInviteMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GroupInviteMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.GroupInviteMessage;

        /**
         * Creates a plain object from a GroupInviteMessage message. Also converts values to other types if specified.
         * @param message GroupInviteMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.GroupInviteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GroupInviteMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeviceSentMessage. */
    interface IDeviceSentMessage {

        /** DeviceSentMessage destinationJid */
        destinationJid?: (string|null);

        /** DeviceSentMessage message */
        message?: (proto.IMessage|null);

        /** DeviceSentMessage phash */
        phash?: (string|null);
    }

    /** Represents a DeviceSentMessage. */
    class DeviceSentMessage implements IDeviceSentMessage {

        /**
         * Constructs a new DeviceSentMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDeviceSentMessage);

        /** DeviceSentMessage destinationJid. */
        public destinationJid: string;

        /** DeviceSentMessage message. */
        public message?: (proto.IMessage|null);

        /** DeviceSentMessage phash. */
        public phash: string;

        /**
         * Creates a new DeviceSentMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceSentMessage instance
         */
        public static create(properties?: proto.IDeviceSentMessage): proto.DeviceSentMessage;

        /**
         * Encodes the specified DeviceSentMessage message. Does not implicitly {@link proto.DeviceSentMessage.verify|verify} messages.
         * @param message DeviceSentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDeviceSentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceSentMessage message, length delimited. Does not implicitly {@link proto.DeviceSentMessage.verify|verify} messages.
         * @param message DeviceSentMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDeviceSentMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceSentMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceSentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DeviceSentMessage;

        /**
         * Decodes a DeviceSentMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceSentMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DeviceSentMessage;

        /**
         * Verifies a DeviceSentMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceSentMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceSentMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.DeviceSentMessage;

        /**
         * Creates a plain object from a DeviceSentMessage message. Also converts values to other types if specified.
         * @param message DeviceSentMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DeviceSentMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceSentMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FutureProofMessage. */
    interface IFutureProofMessage {

        /** FutureProofMessage message */
        message?: (proto.IMessage|null);
    }

    /** Represents a FutureProofMessage. */
    class FutureProofMessage implements IFutureProofMessage {

        /**
         * Constructs a new FutureProofMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFutureProofMessage);

        /** FutureProofMessage message. */
        public message?: (proto.IMessage|null);

        /**
         * Creates a new FutureProofMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FutureProofMessage instance
         */
        public static create(properties?: proto.IFutureProofMessage): proto.FutureProofMessage;

        /**
         * Encodes the specified FutureProofMessage message. Does not implicitly {@link proto.FutureProofMessage.verify|verify} messages.
         * @param message FutureProofMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFutureProofMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FutureProofMessage message, length delimited. Does not implicitly {@link proto.FutureProofMessage.verify|verify} messages.
         * @param message FutureProofMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFutureProofMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FutureProofMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FutureProofMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FutureProofMessage;

        /**
         * Decodes a FutureProofMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FutureProofMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FutureProofMessage;

        /**
         * Verifies a FutureProofMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FutureProofMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FutureProofMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.FutureProofMessage;

        /**
         * Creates a plain object from a FutureProofMessage message. Also converts values to other types if specified.
         * @param message FutureProofMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FutureProofMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FutureProofMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ButtonText. */
    interface IButtonText {

        /** ButtonText displayText */
        displayText?: (string|null);
    }

    /** Represents a ButtonText. */
    class ButtonText implements IButtonText {

        /**
         * Constructs a new ButtonText.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IButtonText);

        /** ButtonText displayText. */
        public displayText: string;

        /**
         * Creates a new ButtonText instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ButtonText instance
         */
        public static create(properties?: proto.IButtonText): proto.ButtonText;

        /**
         * Encodes the specified ButtonText message. Does not implicitly {@link proto.ButtonText.verify|verify} messages.
         * @param message ButtonText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IButtonText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ButtonText message, length delimited. Does not implicitly {@link proto.ButtonText.verify|verify} messages.
         * @param message ButtonText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IButtonText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ButtonText message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ButtonText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ButtonText;

        /**
         * Decodes a ButtonText message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ButtonText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ButtonText;

        /**
         * Verifies a ButtonText message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ButtonText message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ButtonText
         */
        public static fromObject(object: { [k: string]: any }): proto.ButtonText;

        /**
         * Creates a plain object from a ButtonText message. Also converts values to other types if specified.
         * @param message ButtonText
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ButtonText, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ButtonText to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NativeFlowInfo. */
    interface INativeFlowInfo {

        /** NativeFlowInfo name */
        name?: (string|null);

        /** NativeFlowInfo paramsJson */
        paramsJson?: (string|null);
    }

    /** Represents a NativeFlowInfo. */
    class NativeFlowInfo implements INativeFlowInfo {

        /**
         * Constructs a new NativeFlowInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INativeFlowInfo);

        /** NativeFlowInfo name. */
        public name: string;

        /** NativeFlowInfo paramsJson. */
        public paramsJson: string;

        /**
         * Creates a new NativeFlowInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NativeFlowInfo instance
         */
        public static create(properties?: proto.INativeFlowInfo): proto.NativeFlowInfo;

        /**
         * Encodes the specified NativeFlowInfo message. Does not implicitly {@link proto.NativeFlowInfo.verify|verify} messages.
         * @param message NativeFlowInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INativeFlowInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NativeFlowInfo message, length delimited. Does not implicitly {@link proto.NativeFlowInfo.verify|verify} messages.
         * @param message NativeFlowInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INativeFlowInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NativeFlowInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NativeFlowInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NativeFlowInfo;

        /**
         * Decodes a NativeFlowInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NativeFlowInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NativeFlowInfo;

        /**
         * Verifies a NativeFlowInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NativeFlowInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NativeFlowInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.NativeFlowInfo;

        /**
         * Creates a plain object from a NativeFlowInfo message. Also converts values to other types if specified.
         * @param message NativeFlowInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NativeFlowInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NativeFlowInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Button. */
    interface IButton {

        /** Button buttonId */
        buttonId?: (string|null);

        /** Button buttonText */
        buttonText?: (proto.IButtonText|null);

        /** Button type */
        type?: (proto.Button.ButtonType|null);

        /** Button nativeFlowInfo */
        nativeFlowInfo?: (proto.INativeFlowInfo|null);
    }

    /** Represents a Button. */
    class Button implements IButton {

        /**
         * Constructs a new Button.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IButton);

        /** Button buttonId. */
        public buttonId: string;

        /** Button buttonText. */
        public buttonText?: (proto.IButtonText|null);

        /** Button type. */
        public type: proto.Button.ButtonType;

        /** Button nativeFlowInfo. */
        public nativeFlowInfo?: (proto.INativeFlowInfo|null);

        /**
         * Creates a new Button instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Button instance
         */
        public static create(properties?: proto.IButton): proto.Button;

        /**
         * Encodes the specified Button message. Does not implicitly {@link proto.Button.verify|verify} messages.
         * @param message Button message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Button message, length delimited. Does not implicitly {@link proto.Button.verify|verify} messages.
         * @param message Button message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Button message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Button;

        /**
         * Decodes a Button message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Button;

        /**
         * Verifies a Button message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Button message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Button
         */
        public static fromObject(object: { [k: string]: any }): proto.Button;

        /**
         * Creates a plain object from a Button message. Also converts values to other types if specified.
         * @param message Button
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Button, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Button to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Button {

        /** ButtonType enum. */
        enum ButtonType {
            UNKNOWN = 0,
            RESPONSE = 1,
            NATIVE_FLOW = 2
        }
    }

    /** Properties of a ButtonsMessage. */
    interface IButtonsMessage {

        /** ButtonsMessage contentText */
        contentText?: (string|null);

        /** ButtonsMessage footerText */
        footerText?: (string|null);

        /** ButtonsMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** ButtonsMessage buttons */
        buttons?: (proto.IButton[]|null);

        /** ButtonsMessage headerType */
        headerType?: (proto.ButtonsMessage.ButtonsMessageHeaderType|null);

        /** ButtonsMessage text */
        text?: (string|null);

        /** ButtonsMessage documentMessage */
        documentMessage?: (proto.IDocumentMessage|null);

        /** ButtonsMessage imageMessage */
        imageMessage?: (proto.IImageMessage|null);

        /** ButtonsMessage videoMessage */
        videoMessage?: (proto.IVideoMessage|null);

        /** ButtonsMessage locationMessage */
        locationMessage?: (proto.ILocationMessage|null);
    }

    /** Represents a ButtonsMessage. */
    class ButtonsMessage implements IButtonsMessage {

        /**
         * Constructs a new ButtonsMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IButtonsMessage);

        /** ButtonsMessage contentText. */
        public contentText: string;

        /** ButtonsMessage footerText. */
        public footerText: string;

        /** ButtonsMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** ButtonsMessage buttons. */
        public buttons: proto.IButton[];

        /** ButtonsMessage headerType. */
        public headerType: proto.ButtonsMessage.ButtonsMessageHeaderType;

        /** ButtonsMessage text. */
        public text?: (string|null);

        /** ButtonsMessage documentMessage. */
        public documentMessage?: (proto.IDocumentMessage|null);

        /** ButtonsMessage imageMessage. */
        public imageMessage?: (proto.IImageMessage|null);

        /** ButtonsMessage videoMessage. */
        public videoMessage?: (proto.IVideoMessage|null);

        /** ButtonsMessage locationMessage. */
        public locationMessage?: (proto.ILocationMessage|null);

        /** ButtonsMessage header. */
        public header?: ("text"|"documentMessage"|"imageMessage"|"videoMessage"|"locationMessage");

        /**
         * Creates a new ButtonsMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ButtonsMessage instance
         */
        public static create(properties?: proto.IButtonsMessage): proto.ButtonsMessage;

        /**
         * Encodes the specified ButtonsMessage message. Does not implicitly {@link proto.ButtonsMessage.verify|verify} messages.
         * @param message ButtonsMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IButtonsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ButtonsMessage message, length delimited. Does not implicitly {@link proto.ButtonsMessage.verify|verify} messages.
         * @param message ButtonsMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IButtonsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ButtonsMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ButtonsMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ButtonsMessage;

        /**
         * Decodes a ButtonsMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ButtonsMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ButtonsMessage;

        /**
         * Verifies a ButtonsMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ButtonsMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ButtonsMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ButtonsMessage;

        /**
         * Creates a plain object from a ButtonsMessage message. Also converts values to other types if specified.
         * @param message ButtonsMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ButtonsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ButtonsMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ButtonsMessage {

        /** ButtonsMessageHeaderType enum. */
        enum ButtonsMessageHeaderType {
            UNKNOWN = 0,
            EMPTY = 1,
            TEXT = 2,
            DOCUMENT = 3,
            IMAGE = 4,
            VIDEO = 5,
            LOCATION = 6
        }
    }

    /** Properties of a ButtonsResponseMessage. */
    interface IButtonsResponseMessage {

        /** ButtonsResponseMessage selectedButtonId */
        selectedButtonId?: (string|null);

        /** ButtonsResponseMessage contextInfo */
        contextInfo?: (proto.IContextInfo|null);

        /** ButtonsResponseMessage type */
        type?: (proto.ButtonsResponseMessage.ButtonsResponseMessageType|null);

        /** ButtonsResponseMessage selectedDisplayText */
        selectedDisplayText?: (string|null);
    }

    /** Represents a ButtonsResponseMessage. */
    class ButtonsResponseMessage implements IButtonsResponseMessage {

        /**
         * Constructs a new ButtonsResponseMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IButtonsResponseMessage);

        /** ButtonsResponseMessage selectedButtonId. */
        public selectedButtonId: string;

        /** ButtonsResponseMessage contextInfo. */
        public contextInfo?: (proto.IContextInfo|null);

        /** ButtonsResponseMessage type. */
        public type: proto.ButtonsResponseMessage.ButtonsResponseMessageType;

        /** ButtonsResponseMessage selectedDisplayText. */
        public selectedDisplayText?: (string|null);

        /** ButtonsResponseMessage response. */
        public response?: "selectedDisplayText";

        /**
         * Creates a new ButtonsResponseMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ButtonsResponseMessage instance
         */
        public static create(properties?: proto.IButtonsResponseMessage): proto.ButtonsResponseMessage;

        /**
         * Encodes the specified ButtonsResponseMessage message. Does not implicitly {@link proto.ButtonsResponseMessage.verify|verify} messages.
         * @param message ButtonsResponseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IButtonsResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ButtonsResponseMessage message, length delimited. Does not implicitly {@link proto.ButtonsResponseMessage.verify|verify} messages.
         * @param message ButtonsResponseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IButtonsResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ButtonsResponseMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ButtonsResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ButtonsResponseMessage;

        /**
         * Decodes a ButtonsResponseMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ButtonsResponseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ButtonsResponseMessage;

        /**
         * Verifies a ButtonsResponseMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ButtonsResponseMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ButtonsResponseMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.ButtonsResponseMessage;

        /**
         * Creates a plain object from a ButtonsResponseMessage message. Also converts values to other types if specified.
         * @param message ButtonsResponseMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ButtonsResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ButtonsResponseMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ButtonsResponseMessage {

        /** ButtonsResponseMessageType enum. */
        enum ButtonsResponseMessageType {
            UNKNOWN = 0,
            DISPLAY_TEXT = 1
        }
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message conversation */
        conversation?: (string|null);

        /** Message senderKeyDistributionMessage */
        senderKeyDistributionMessage?: (proto.ISenderKeyDistributionMessage|null);

        /** Message imageMessage */
        imageMessage?: (proto.IImageMessage|null);

        /** Message contactMessage */
        contactMessage?: (proto.IContactMessage|null);

        /** Message locationMessage */
        locationMessage?: (proto.ILocationMessage|null);

        /** Message extendedTextMessage */
        extendedTextMessage?: (proto.IExtendedTextMessage|null);

        /** Message documentMessage */
        documentMessage?: (proto.IDocumentMessage|null);

        /** Message audioMessage */
        audioMessage?: (proto.IAudioMessage|null);

        /** Message videoMessage */
        videoMessage?: (proto.IVideoMessage|null);

        /** Message call */
        call?: (proto.ICall|null);

        /** Message chat */
        chat?: (proto.IChat|null);

        /** Message protocolMessage */
        protocolMessage?: (proto.IProtocolMessage|null);

        /** Message contactsArrayMessage */
        contactsArrayMessage?: (proto.IContactsArrayMessage|null);

        /** Message highlyStructuredMessage */
        highlyStructuredMessage?: (proto.IHighlyStructuredMessage|null);

        /** Message fastRatchetKeySenderKeyDistributionMessage */
        fastRatchetKeySenderKeyDistributionMessage?: (proto.ISenderKeyDistributionMessage|null);

        /** Message sendPaymentMessage */
        sendPaymentMessage?: (proto.ISendPaymentMessage|null);

        /** Message liveLocationMessage */
        liveLocationMessage?: (proto.ILiveLocationMessage|null);

        /** Message requestPaymentMessage */
        requestPaymentMessage?: (proto.IRequestPaymentMessage|null);

        /** Message declinePaymentRequestMessage */
        declinePaymentRequestMessage?: (proto.IDeclinePaymentRequestMessage|null);

        /** Message cancelPaymentRequestMessage */
        cancelPaymentRequestMessage?: (proto.ICancelPaymentRequestMessage|null);

        /** Message templateMessage */
        templateMessage?: (proto.ITemplateMessage|null);

        /** Message stickerMessage */
        stickerMessage?: (proto.IStickerMessage|null);

        /** Message groupInviteMessage */
        groupInviteMessage?: (proto.IGroupInviteMessage|null);

        /** Message templateButtonReplyMessage */
        templateButtonReplyMessage?: (proto.ITemplateButtonReplyMessage|null);

        /** Message productMessage */
        productMessage?: (proto.IProductMessage|null);

        /** Message deviceSentMessage */
        deviceSentMessage?: (proto.IDeviceSentMessage|null);

        /** Message messageContextInfo */
        messageContextInfo?: (proto.IMessageContextInfo|null);

        /** Message listMessage */
        listMessage?: (proto.IListMessage|null);

        /** Message viewOnceMessage */
        viewOnceMessage?: (proto.IFutureProofMessage|null);

        /** Message orderMessage */
        orderMessage?: (proto.IOrderMessage|null);

        /** Message listResponseMessage */
        listResponseMessage?: (proto.IListResponseMessage|null);

        /** Message ephemeralMessage */
        ephemeralMessage?: (proto.IFutureProofMessage|null);

        /** Message invoiceMessage */
        invoiceMessage?: (proto.IInvoiceMessage|null);

        /** Message buttonsMessage */
        buttonsMessage?: (proto.IButtonsMessage|null);

        /** Message buttonsResponseMessage */
        buttonsResponseMessage?: (proto.IButtonsResponseMessage|null);

        /** Message paymentInviteMessage */
        paymentInviteMessage?: (proto.IPaymentInviteMessage|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMessage);

        /** Message conversation. */
        public conversation: string;

        /** Message senderKeyDistributionMessage. */
        public senderKeyDistributionMessage?: (proto.ISenderKeyDistributionMessage|null);

        /** Message imageMessage. */
        public imageMessage?: (proto.IImageMessage|null);

        /** Message contactMessage. */
        public contactMessage?: (proto.IContactMessage|null);

        /** Message locationMessage. */
        public locationMessage?: (proto.ILocationMessage|null);

        /** Message extendedTextMessage. */
        public extendedTextMessage?: (proto.IExtendedTextMessage|null);

        /** Message documentMessage. */
        public documentMessage?: (proto.IDocumentMessage|null);

        /** Message audioMessage. */
        public audioMessage?: (proto.IAudioMessage|null);

        /** Message videoMessage. */
        public videoMessage?: (proto.IVideoMessage|null);

        /** Message call. */
        public call?: (proto.ICall|null);

        /** Message chat. */
        public chat?: (proto.IChat|null);

        /** Message protocolMessage. */
        public protocolMessage?: (proto.IProtocolMessage|null);

        /** Message contactsArrayMessage. */
        public contactsArrayMessage?: (proto.IContactsArrayMessage|null);

        /** Message highlyStructuredMessage. */
        public highlyStructuredMessage?: (proto.IHighlyStructuredMessage|null);

        /** Message fastRatchetKeySenderKeyDistributionMessage. */
        public fastRatchetKeySenderKeyDistributionMessage?: (proto.ISenderKeyDistributionMessage|null);

        /** Message sendPaymentMessage. */
        public sendPaymentMessage?: (proto.ISendPaymentMessage|null);

        /** Message liveLocationMessage. */
        public liveLocationMessage?: (proto.ILiveLocationMessage|null);

        /** Message requestPaymentMessage. */
        public requestPaymentMessage?: (proto.IRequestPaymentMessage|null);

        /** Message declinePaymentRequestMessage. */
        public declinePaymentRequestMessage?: (proto.IDeclinePaymentRequestMessage|null);

        /** Message cancelPaymentRequestMessage. */
        public cancelPaymentRequestMessage?: (proto.ICancelPaymentRequestMessage|null);

        /** Message templateMessage. */
        public templateMessage?: (proto.ITemplateMessage|null);

        /** Message stickerMessage. */
        public stickerMessage?: (proto.IStickerMessage|null);

        /** Message groupInviteMessage. */
        public groupInviteMessage?: (proto.IGroupInviteMessage|null);

        /** Message templateButtonReplyMessage. */
        public templateButtonReplyMessage?: (proto.ITemplateButtonReplyMessage|null);

        /** Message productMessage. */
        public productMessage?: (proto.IProductMessage|null);

        /** Message deviceSentMessage. */
        public deviceSentMessage?: (proto.IDeviceSentMessage|null);

        /** Message messageContextInfo. */
        public messageContextInfo?: (proto.IMessageContextInfo|null);

        /** Message listMessage. */
        public listMessage?: (proto.IListMessage|null);

        /** Message viewOnceMessage. */
        public viewOnceMessage?: (proto.IFutureProofMessage|null);

        /** Message orderMessage. */
        public orderMessage?: (proto.IOrderMessage|null);

        /** Message listResponseMessage. */
        public listResponseMessage?: (proto.IListResponseMessage|null);

        /** Message ephemeralMessage. */
        public ephemeralMessage?: (proto.IFutureProofMessage|null);

        /** Message invoiceMessage. */
        public invoiceMessage?: (proto.IInvoiceMessage|null);

        /** Message buttonsMessage. */
        public buttonsMessage?: (proto.IButtonsMessage|null);

        /** Message buttonsResponseMessage. */
        public buttonsResponseMessage?: (proto.IButtonsResponseMessage|null);

        /** Message paymentInviteMessage. */
        public paymentInviteMessage?: (proto.IPaymentInviteMessage|null);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: proto.IMessage): proto.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): proto.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompanionProps. */
    interface ICompanionProps {

        /** CompanionProps os */
        os?: (string|null);

        /** CompanionProps version */
        version?: (proto.IAppVersion|null);

        /** CompanionProps platformType */
        platformType?: (proto.CompanionProps.CompanionPropsPlatformType|null);

        /** CompanionProps requireFullSync */
        requireFullSync?: (boolean|null);
    }

    /** Represents a CompanionProps. */
    class CompanionProps implements ICompanionProps {

        /**
         * Constructs a new CompanionProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICompanionProps);

        /** CompanionProps os. */
        public os: string;

        /** CompanionProps version. */
        public version?: (proto.IAppVersion|null);

        /** CompanionProps platformType. */
        public platformType: proto.CompanionProps.CompanionPropsPlatformType;

        /** CompanionProps requireFullSync. */
        public requireFullSync: boolean;

        /**
         * Creates a new CompanionProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompanionProps instance
         */
        public static create(properties?: proto.ICompanionProps): proto.CompanionProps;

        /**
         * Encodes the specified CompanionProps message. Does not implicitly {@link proto.CompanionProps.verify|verify} messages.
         * @param message CompanionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICompanionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompanionProps message, length delimited. Does not implicitly {@link proto.CompanionProps.verify|verify} messages.
         * @param message CompanionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICompanionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompanionProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompanionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CompanionProps;

        /**
         * Decodes a CompanionProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompanionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CompanionProps;

        /**
         * Verifies a CompanionProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompanionProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompanionProps
         */
        public static fromObject(object: { [k: string]: any }): proto.CompanionProps;

        /**
         * Creates a plain object from a CompanionProps message. Also converts values to other types if specified.
         * @param message CompanionProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CompanionProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompanionProps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CompanionProps {

        /** CompanionPropsPlatformType enum. */
        enum CompanionPropsPlatformType {
            UNKNOWN = 0,
            CHROME = 1,
            FIREFOX = 2,
            IE = 3,
            OPERA = 4,
            SAFARI = 5,
            EDGE = 6,
            DESKTOP = 7,
            IPAD = 8,
            ANDROID_TABLET = 9,
            OHANA = 10,
            ALOHA = 11,
            CATALINA = 12
        }
    }

    /** Properties of a ADVSignedDeviceIdentityHMAC. */
    interface IADVSignedDeviceIdentityHMAC {

        /** ADVSignedDeviceIdentityHMAC details */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentityHMAC hmac */
        hmac?: (Uint8Array|null);
    }

    /** Represents a ADVSignedDeviceIdentityHMAC. */
    class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {

        /**
         * Constructs a new ADVSignedDeviceIdentityHMAC.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IADVSignedDeviceIdentityHMAC);

        /** ADVSignedDeviceIdentityHMAC details. */
        public details: Uint8Array;

        /** ADVSignedDeviceIdentityHMAC hmac. */
        public hmac: Uint8Array;

        /**
         * Creates a new ADVSignedDeviceIdentityHMAC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentityHMAC instance
         */
        public static create(properties?: proto.IADVSignedDeviceIdentityHMAC): proto.ADVSignedDeviceIdentityHMAC;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message. Does not implicitly {@link proto.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IADVSignedDeviceIdentityHMAC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message, length delimited. Does not implicitly {@link proto.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @param message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IADVSignedDeviceIdentityHMAC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADVSignedDeviceIdentityHMAC;

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADVSignedDeviceIdentityHMAC;

        /**
         * Verifies a ADVSignedDeviceIdentityHMAC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentityHMAC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentityHMAC
         */
        public static fromObject(object: { [k: string]: any }): proto.ADVSignedDeviceIdentityHMAC;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentityHMAC message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentityHMAC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ADVSignedDeviceIdentityHMAC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentityHMAC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ADVSignedDeviceIdentity. */
    interface IADVSignedDeviceIdentity {

        /** ADVSignedDeviceIdentity details */
        details?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignatureKey */
        accountSignatureKey?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity accountSignature */
        accountSignature?: (Uint8Array|null);

        /** ADVSignedDeviceIdentity deviceSignature */
        deviceSignature?: (Uint8Array|null);
    }

    /** Represents a ADVSignedDeviceIdentity. */
    class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {

        /**
         * Constructs a new ADVSignedDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IADVSignedDeviceIdentity);

        /** ADVSignedDeviceIdentity details. */
        public details: Uint8Array;

        /** ADVSignedDeviceIdentity accountSignatureKey. */
        public accountSignatureKey: Uint8Array;

        /** ADVSignedDeviceIdentity accountSignature. */
        public accountSignature: Uint8Array;

        /** ADVSignedDeviceIdentity deviceSignature. */
        public deviceSignature: Uint8Array;

        /**
         * Creates a new ADVSignedDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedDeviceIdentity instance
         */
        public static create(properties?: proto.IADVSignedDeviceIdentity): proto.ADVSignedDeviceIdentity;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message. Does not implicitly {@link proto.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IADVSignedDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedDeviceIdentity message, length delimited. Does not implicitly {@link proto.ADVSignedDeviceIdentity.verify|verify} messages.
         * @param message ADVSignedDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IADVSignedDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADVSignedDeviceIdentity;

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADVSignedDeviceIdentity;

        /**
         * Verifies a ADVSignedDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedDeviceIdentity
         */
        public static fromObject(object: { [k: string]: any }): proto.ADVSignedDeviceIdentity;

        /**
         * Creates a plain object from a ADVSignedDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVSignedDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ADVSignedDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedDeviceIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ADVDeviceIdentity. */
    interface IADVDeviceIdentity {

        /** ADVDeviceIdentity rawId */
        rawId?: (number|null);

        /** ADVDeviceIdentity timestamp */
        timestamp?: (number|Long|null);

        /** ADVDeviceIdentity keyIndex */
        keyIndex?: (number|null);
    }

    /** Represents a ADVDeviceIdentity. */
    class ADVDeviceIdentity implements IADVDeviceIdentity {

        /**
         * Constructs a new ADVDeviceIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IADVDeviceIdentity);

        /** ADVDeviceIdentity rawId. */
        public rawId: number;

        /** ADVDeviceIdentity timestamp. */
        public timestamp: (number|Long);

        /** ADVDeviceIdentity keyIndex. */
        public keyIndex: number;

        /**
         * Creates a new ADVDeviceIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVDeviceIdentity instance
         */
        public static create(properties?: proto.IADVDeviceIdentity): proto.ADVDeviceIdentity;

        /**
         * Encodes the specified ADVDeviceIdentity message. Does not implicitly {@link proto.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IADVDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVDeviceIdentity message, length delimited. Does not implicitly {@link proto.ADVDeviceIdentity.verify|verify} messages.
         * @param message ADVDeviceIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IADVDeviceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADVDeviceIdentity;

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADVDeviceIdentity;

        /**
         * Verifies a ADVDeviceIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVDeviceIdentity
         */
        public static fromObject(object: { [k: string]: any }): proto.ADVDeviceIdentity;

        /**
         * Creates a plain object from a ADVDeviceIdentity message. Also converts values to other types if specified.
         * @param message ADVDeviceIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ADVDeviceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVDeviceIdentity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ADVSignedKeyIndexList. */
    interface IADVSignedKeyIndexList {

        /** ADVSignedKeyIndexList details */
        details?: (Uint8Array|null);

        /** ADVSignedKeyIndexList accountSignature */
        accountSignature?: (Uint8Array|null);
    }

    /** Represents a ADVSignedKeyIndexList. */
    class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {

        /**
         * Constructs a new ADVSignedKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IADVSignedKeyIndexList);

        /** ADVSignedKeyIndexList details. */
        public details: Uint8Array;

        /** ADVSignedKeyIndexList accountSignature. */
        public accountSignature: Uint8Array;

        /**
         * Creates a new ADVSignedKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVSignedKeyIndexList instance
         */
        public static create(properties?: proto.IADVSignedKeyIndexList): proto.ADVSignedKeyIndexList;

        /**
         * Encodes the specified ADVSignedKeyIndexList message. Does not implicitly {@link proto.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IADVSignedKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVSignedKeyIndexList message, length delimited. Does not implicitly {@link proto.ADVSignedKeyIndexList.verify|verify} messages.
         * @param message ADVSignedKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IADVSignedKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADVSignedKeyIndexList;

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADVSignedKeyIndexList;

        /**
         * Verifies a ADVSignedKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVSignedKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVSignedKeyIndexList
         */
        public static fromObject(object: { [k: string]: any }): proto.ADVSignedKeyIndexList;

        /**
         * Creates a plain object from a ADVSignedKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVSignedKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ADVSignedKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVSignedKeyIndexList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ADVKeyIndexList. */
    interface IADVKeyIndexList {

        /** ADVKeyIndexList rawId */
        rawId?: (number|null);

        /** ADVKeyIndexList timestamp */
        timestamp?: (number|Long|null);

        /** ADVKeyIndexList currentIndex */
        currentIndex?: (number|null);

        /** ADVKeyIndexList validIndexes */
        validIndexes?: (number[]|null);
    }

    /** Represents a ADVKeyIndexList. */
    class ADVKeyIndexList implements IADVKeyIndexList {

        /**
         * Constructs a new ADVKeyIndexList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IADVKeyIndexList);

        /** ADVKeyIndexList rawId. */
        public rawId: number;

        /** ADVKeyIndexList timestamp. */
        public timestamp: (number|Long);

        /** ADVKeyIndexList currentIndex. */
        public currentIndex: number;

        /** ADVKeyIndexList validIndexes. */
        public validIndexes: number[];

        /**
         * Creates a new ADVKeyIndexList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADVKeyIndexList instance
         */
        public static create(properties?: proto.IADVKeyIndexList): proto.ADVKeyIndexList;

        /**
         * Encodes the specified ADVKeyIndexList message. Does not implicitly {@link proto.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IADVKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADVKeyIndexList message, length delimited. Does not implicitly {@link proto.ADVKeyIndexList.verify|verify} messages.
         * @param message ADVKeyIndexList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IADVKeyIndexList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ADVKeyIndexList;

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ADVKeyIndexList;

        /**
         * Verifies a ADVKeyIndexList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADVKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADVKeyIndexList
         */
        public static fromObject(object: { [k: string]: any }): proto.ADVKeyIndexList;

        /**
         * Creates a plain object from a ADVKeyIndexList message. Also converts values to other types if specified.
         * @param message ADVKeyIndexList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ADVKeyIndexList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADVKeyIndexList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageKey. */
    interface IMessageKey {

        /** MessageKey remoteJid */
        remoteJid?: (string|null);

        /** MessageKey fromMe */
        fromMe?: (boolean|null);

        /** MessageKey id */
        id?: (string|null);

        /** MessageKey participant */
        participant?: (string|null);
    }

    /** Represents a MessageKey. */
    class MessageKey implements IMessageKey {

        /**
         * Constructs a new MessageKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMessageKey);

        /** MessageKey remoteJid. */
        public remoteJid: string;

        /** MessageKey fromMe. */
        public fromMe: boolean;

        /** MessageKey id. */
        public id: string;

        /** MessageKey participant. */
        public participant: string;

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageKey instance
         */
        public static create(properties?: proto.IMessageKey): proto.MessageKey;

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link proto.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link proto.MessageKey.verify|verify} messages.
         * @param message MessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MessageKey;

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MessageKey;

        /**
         * Verifies a MessageKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageKey
         */
        public static fromObject(object: { [k: string]: any }): proto.MessageKey;

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @param message MessageKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PhotoChange. */
    interface IPhotoChange {

        /** PhotoChange oldPhoto */
        oldPhoto?: (Uint8Array|null);

        /** PhotoChange newPhoto */
        newPhoto?: (Uint8Array|null);

        /** PhotoChange newPhotoId */
        newPhotoId?: (number|null);
    }

    /** Represents a PhotoChange. */
    class PhotoChange implements IPhotoChange {

        /**
         * Constructs a new PhotoChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPhotoChange);

        /** PhotoChange oldPhoto. */
        public oldPhoto: Uint8Array;

        /** PhotoChange newPhoto. */
        public newPhoto: Uint8Array;

        /** PhotoChange newPhotoId. */
        public newPhotoId: number;

        /**
         * Creates a new PhotoChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PhotoChange instance
         */
        public static create(properties?: proto.IPhotoChange): proto.PhotoChange;

        /**
         * Encodes the specified PhotoChange message. Does not implicitly {@link proto.PhotoChange.verify|verify} messages.
         * @param message PhotoChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPhotoChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PhotoChange message, length delimited. Does not implicitly {@link proto.PhotoChange.verify|verify} messages.
         * @param message PhotoChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPhotoChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PhotoChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PhotoChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PhotoChange;

        /**
         * Decodes a PhotoChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PhotoChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PhotoChange;

        /**
         * Verifies a PhotoChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PhotoChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PhotoChange
         */
        public static fromObject(object: { [k: string]: any }): proto.PhotoChange;

        /**
         * Creates a plain object from a PhotoChange message. Also converts values to other types if specified.
         * @param message PhotoChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PhotoChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PhotoChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MediaData. */
    interface IMediaData {

        /** MediaData localPath */
        localPath?: (string|null);
    }

    /** Represents a MediaData. */
    class MediaData implements IMediaData {

        /**
         * Constructs a new MediaData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMediaData);

        /** MediaData localPath. */
        public localPath: string;

        /**
         * Creates a new MediaData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MediaData instance
         */
        public static create(properties?: proto.IMediaData): proto.MediaData;

        /**
         * Encodes the specified MediaData message. Does not implicitly {@link proto.MediaData.verify|verify} messages.
         * @param message MediaData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMediaData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MediaData message, length delimited. Does not implicitly {@link proto.MediaData.verify|verify} messages.
         * @param message MediaData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMediaData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MediaData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MediaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MediaData;

        /**
         * Decodes a MediaData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MediaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MediaData;

        /**
         * Verifies a MediaData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MediaData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MediaData
         */
        public static fromObject(object: { [k: string]: any }): proto.MediaData;

        /**
         * Creates a plain object from a MediaData message. Also converts values to other types if specified.
         * @param message MediaData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MediaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MediaData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WebFeatures. */
    interface IWebFeatures {

        /** WebFeatures labelsDisplay */
        labelsDisplay?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures voipIndividualOutgoing */
        voipIndividualOutgoing?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures groupsV3 */
        groupsV3?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures groupsV3Create */
        groupsV3Create?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures changeNumberV2 */
        changeNumberV2?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures queryStatusV3Thumbnail */
        queryStatusV3Thumbnail?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures liveLocations */
        liveLocations?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures queryVname */
        queryVname?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures voipIndividualIncoming */
        voipIndividualIncoming?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures quickRepliesQuery */
        quickRepliesQuery?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures payments */
        payments?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures stickerPackQuery */
        stickerPackQuery?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures liveLocationsFinal */
        liveLocationsFinal?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures labelsEdit */
        labelsEdit?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures mediaUpload */
        mediaUpload?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures mediaUploadRichQuickReplies */
        mediaUploadRichQuickReplies?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures vnameV2 */
        vnameV2?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures videoPlaybackUrl */
        videoPlaybackUrl?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures statusRanking */
        statusRanking?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures voipIndividualVideo */
        voipIndividualVideo?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures thirdPartyStickers */
        thirdPartyStickers?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures frequentlyForwardedSetting */
        frequentlyForwardedSetting?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures groupsV4JoinPermission */
        groupsV4JoinPermission?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures recentStickers */
        recentStickers?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures catalog */
        catalog?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures starredStickers */
        starredStickers?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures voipGroupCall */
        voipGroupCall?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures templateMessage */
        templateMessage?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures templateMessageInteractivity */
        templateMessageInteractivity?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures ephemeralMessages */
        ephemeralMessages?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures e2ENotificationSync */
        e2ENotificationSync?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures recentStickersV2 */
        recentStickersV2?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures recentStickersV3 */
        recentStickersV3?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures userNotice */
        userNotice?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures support */
        support?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures groupUiiCleanup */
        groupUiiCleanup?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures groupDogfoodingInternalOnly */
        groupDogfoodingInternalOnly?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures settingsSync */
        settingsSync?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures archiveV2 */
        archiveV2?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures ephemeralAllowGroupMembers */
        ephemeralAllowGroupMembers?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures ephemeral24HDuration */
        ephemeral24HDuration?: (proto.WebFeatures.WebFeaturesFlag|null);

        /** WebFeatures mdForceUpgrade */
        mdForceUpgrade?: (proto.WebFeatures.WebFeaturesFlag|null);
    }

    /** Represents a WebFeatures. */
    class WebFeatures implements IWebFeatures {

        /**
         * Constructs a new WebFeatures.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IWebFeatures);

        /** WebFeatures labelsDisplay. */
        public labelsDisplay: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures voipIndividualOutgoing. */
        public voipIndividualOutgoing: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures groupsV3. */
        public groupsV3: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures groupsV3Create. */
        public groupsV3Create: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures changeNumberV2. */
        public changeNumberV2: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures queryStatusV3Thumbnail. */
        public queryStatusV3Thumbnail: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures liveLocations. */
        public liveLocations: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures queryVname. */
        public queryVname: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures voipIndividualIncoming. */
        public voipIndividualIncoming: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures quickRepliesQuery. */
        public quickRepliesQuery: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures payments. */
        public payments: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures stickerPackQuery. */
        public stickerPackQuery: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures liveLocationsFinal. */
        public liveLocationsFinal: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures labelsEdit. */
        public labelsEdit: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures mediaUpload. */
        public mediaUpload: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures mediaUploadRichQuickReplies. */
        public mediaUploadRichQuickReplies: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures vnameV2. */
        public vnameV2: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures videoPlaybackUrl. */
        public videoPlaybackUrl: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures statusRanking. */
        public statusRanking: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures voipIndividualVideo. */
        public voipIndividualVideo: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures thirdPartyStickers. */
        public thirdPartyStickers: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures frequentlyForwardedSetting. */
        public frequentlyForwardedSetting: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures groupsV4JoinPermission. */
        public groupsV4JoinPermission: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures recentStickers. */
        public recentStickers: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures catalog. */
        public catalog: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures starredStickers. */
        public starredStickers: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures voipGroupCall. */
        public voipGroupCall: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures templateMessage. */
        public templateMessage: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures templateMessageInteractivity. */
        public templateMessageInteractivity: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures ephemeralMessages. */
        public ephemeralMessages: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures e2ENotificationSync. */
        public e2ENotificationSync: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures recentStickersV2. */
        public recentStickersV2: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures recentStickersV3. */
        public recentStickersV3: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures userNotice. */
        public userNotice: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures support. */
        public support: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures groupUiiCleanup. */
        public groupUiiCleanup: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures groupDogfoodingInternalOnly. */
        public groupDogfoodingInternalOnly: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures settingsSync. */
        public settingsSync: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures archiveV2. */
        public archiveV2: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures ephemeralAllowGroupMembers. */
        public ephemeralAllowGroupMembers: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures ephemeral24HDuration. */
        public ephemeral24HDuration: proto.WebFeatures.WebFeaturesFlag;

        /** WebFeatures mdForceUpgrade. */
        public mdForceUpgrade: proto.WebFeatures.WebFeaturesFlag;

        /**
         * Creates a new WebFeatures instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebFeatures instance
         */
        public static create(properties?: proto.IWebFeatures): proto.WebFeatures;

        /**
         * Encodes the specified WebFeatures message. Does not implicitly {@link proto.WebFeatures.verify|verify} messages.
         * @param message WebFeatures message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IWebFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebFeatures message, length delimited. Does not implicitly {@link proto.WebFeatures.verify|verify} messages.
         * @param message WebFeatures message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IWebFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebFeatures message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebFeatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WebFeatures;

        /**
         * Decodes a WebFeatures message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebFeatures
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WebFeatures;

        /**
         * Verifies a WebFeatures message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebFeatures message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebFeatures
         */
        public static fromObject(object: { [k: string]: any }): proto.WebFeatures;

        /**
         * Creates a plain object from a WebFeatures message. Also converts values to other types if specified.
         * @param message WebFeatures
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.WebFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebFeatures to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace WebFeatures {

        /** WebFeaturesFlag enum. */
        enum WebFeaturesFlag {
            NOT_STARTED = 0,
            FORCE_UPGRADE = 1,
            DEVELOPMENT = 2,
            PRODUCTION = 3
        }
    }

    /** Properties of a NotificationMessageInfo. */
    interface INotificationMessageInfo {

        /** NotificationMessageInfo key */
        key?: (proto.IMessageKey|null);

        /** NotificationMessageInfo message */
        message?: (proto.IMessage|null);

        /** NotificationMessageInfo messageTimestamp */
        messageTimestamp?: (number|Long|null);

        /** NotificationMessageInfo participant */
        participant?: (string|null);
    }

    /** Represents a NotificationMessageInfo. */
    class NotificationMessageInfo implements INotificationMessageInfo {

        /**
         * Constructs a new NotificationMessageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotificationMessageInfo);

        /** NotificationMessageInfo key. */
        public key?: (proto.IMessageKey|null);

        /** NotificationMessageInfo message. */
        public message?: (proto.IMessage|null);

        /** NotificationMessageInfo messageTimestamp. */
        public messageTimestamp: (number|Long);

        /** NotificationMessageInfo participant. */
        public participant: string;

        /**
         * Creates a new NotificationMessageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotificationMessageInfo instance
         */
        public static create(properties?: proto.INotificationMessageInfo): proto.NotificationMessageInfo;

        /**
         * Encodes the specified NotificationMessageInfo message. Does not implicitly {@link proto.NotificationMessageInfo.verify|verify} messages.
         * @param message NotificationMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotificationMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotificationMessageInfo message, length delimited. Does not implicitly {@link proto.NotificationMessageInfo.verify|verify} messages.
         * @param message NotificationMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotificationMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotificationMessageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotificationMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NotificationMessageInfo;

        /**
         * Decodes a NotificationMessageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotificationMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NotificationMessageInfo;

        /**
         * Verifies a NotificationMessageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotificationMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotificationMessageInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.NotificationMessageInfo;

        /**
         * Creates a plain object from a NotificationMessageInfo message. Also converts values to other types if specified.
         * @param message NotificationMessageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NotificationMessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotificationMessageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WebNotificationsInfo. */
    interface IWebNotificationsInfo {

        /** WebNotificationsInfo timestamp */
        timestamp?: (number|Long|null);

        /** WebNotificationsInfo unreadChats */
        unreadChats?: (number|null);

        /** WebNotificationsInfo notifyMessageCount */
        notifyMessageCount?: (number|null);

        /** WebNotificationsInfo notifyMessages */
        notifyMessages?: (proto.IWebMessageInfo[]|null);
    }

    /** Represents a WebNotificationsInfo. */
    class WebNotificationsInfo implements IWebNotificationsInfo {

        /**
         * Constructs a new WebNotificationsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IWebNotificationsInfo);

        /** WebNotificationsInfo timestamp. */
        public timestamp: (number|Long);

        /** WebNotificationsInfo unreadChats. */
        public unreadChats: number;

        /** WebNotificationsInfo notifyMessageCount. */
        public notifyMessageCount: number;

        /** WebNotificationsInfo notifyMessages. */
        public notifyMessages: proto.IWebMessageInfo[];

        /**
         * Creates a new WebNotificationsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebNotificationsInfo instance
         */
        public static create(properties?: proto.IWebNotificationsInfo): proto.WebNotificationsInfo;

        /**
         * Encodes the specified WebNotificationsInfo message. Does not implicitly {@link proto.WebNotificationsInfo.verify|verify} messages.
         * @param message WebNotificationsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IWebNotificationsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebNotificationsInfo message, length delimited. Does not implicitly {@link proto.WebNotificationsInfo.verify|verify} messages.
         * @param message WebNotificationsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IWebNotificationsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebNotificationsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebNotificationsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WebNotificationsInfo;

        /**
         * Decodes a WebNotificationsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebNotificationsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WebNotificationsInfo;

        /**
         * Verifies a WebNotificationsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebNotificationsInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebNotificationsInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.WebNotificationsInfo;

        /**
         * Creates a plain object from a WebNotificationsInfo message. Also converts values to other types if specified.
         * @param message WebNotificationsInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.WebNotificationsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebNotificationsInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaymentInfo. */
    interface IPaymentInfo {

        /** PaymentInfo currencyDeprecated */
        currencyDeprecated?: (proto.PaymentInfo.PaymentInfoCurrency|null);

        /** PaymentInfo amount1000 */
        amount1000?: (number|Long|null);

        /** PaymentInfo receiverJid */
        receiverJid?: (string|null);

        /** PaymentInfo status */
        status?: (proto.PaymentInfo.PaymentInfoStatus|null);

        /** PaymentInfo transactionTimestamp */
        transactionTimestamp?: (number|Long|null);

        /** PaymentInfo requestMessageKey */
        requestMessageKey?: (proto.IMessageKey|null);

        /** PaymentInfo expiryTimestamp */
        expiryTimestamp?: (number|Long|null);

        /** PaymentInfo futureproofed */
        futureproofed?: (boolean|null);

        /** PaymentInfo currency */
        currency?: (string|null);

        /** PaymentInfo txnStatus */
        txnStatus?: (proto.PaymentInfo.PaymentInfoTxnStatus|null);

        /** PaymentInfo useNoviFiatFormat */
        useNoviFiatFormat?: (boolean|null);

        /** PaymentInfo primaryAmount */
        primaryAmount?: (proto.IMoney|null);

        /** PaymentInfo exchangeAmount */
        exchangeAmount?: (proto.IMoney|null);
    }

    /** Represents a PaymentInfo. */
    class PaymentInfo implements IPaymentInfo {

        /**
         * Constructs a new PaymentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPaymentInfo);

        /** PaymentInfo currencyDeprecated. */
        public currencyDeprecated: proto.PaymentInfo.PaymentInfoCurrency;

        /** PaymentInfo amount1000. */
        public amount1000: (number|Long);

        /** PaymentInfo receiverJid. */
        public receiverJid: string;

        /** PaymentInfo status. */
        public status: proto.PaymentInfo.PaymentInfoStatus;

        /** PaymentInfo transactionTimestamp. */
        public transactionTimestamp: (number|Long);

        /** PaymentInfo requestMessageKey. */
        public requestMessageKey?: (proto.IMessageKey|null);

        /** PaymentInfo expiryTimestamp. */
        public expiryTimestamp: (number|Long);

        /** PaymentInfo futureproofed. */
        public futureproofed: boolean;

        /** PaymentInfo currency. */
        public currency: string;

        /** PaymentInfo txnStatus. */
        public txnStatus: proto.PaymentInfo.PaymentInfoTxnStatus;

        /** PaymentInfo useNoviFiatFormat. */
        public useNoviFiatFormat: boolean;

        /** PaymentInfo primaryAmount. */
        public primaryAmount?: (proto.IMoney|null);

        /** PaymentInfo exchangeAmount. */
        public exchangeAmount?: (proto.IMoney|null);

        /**
         * Creates a new PaymentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymentInfo instance
         */
        public static create(properties?: proto.IPaymentInfo): proto.PaymentInfo;

        /**
         * Encodes the specified PaymentInfo message. Does not implicitly {@link proto.PaymentInfo.verify|verify} messages.
         * @param message PaymentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymentInfo message, length delimited. Does not implicitly {@link proto.PaymentInfo.verify|verify} messages.
         * @param message PaymentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPaymentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PaymentInfo;

        /**
         * Decodes a PaymentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PaymentInfo;

        /**
         * Verifies a PaymentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymentInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.PaymentInfo;

        /**
         * Creates a plain object from a PaymentInfo message. Also converts values to other types if specified.
         * @param message PaymentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PaymentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PaymentInfo {

        /** PaymentInfoCurrency enum. */
        enum PaymentInfoCurrency {
            UNKNOWN_CURRENCY = 0,
            INR = 1
        }

        /** PaymentInfoStatus enum. */
        enum PaymentInfoStatus {
            UNKNOWN_STATUS = 0,
            PROCESSING = 1,
            SENT = 2,
            NEED_TO_ACCEPT = 3,
            COMPLETE = 4,
            COULD_NOT_COMPLETE = 5,
            REFUNDED = 6,
            EXPIRED = 7,
            REJECTED = 8,
            CANCELLED = 9,
            WAITING_FOR_PAYER = 10,
            WAITING = 11
        }

        /** PaymentInfoTxnStatus enum. */
        enum PaymentInfoTxnStatus {
            UNKNOWN = 0,
            PENDING_SETUP = 1,
            PENDING_RECEIVER_SETUP = 2,
            INIT = 3,
            SUCCESS = 4,
            COMPLETED = 5,
            FAILED = 6,
            FAILED_RISK = 7,
            FAILED_PROCESSING = 8,
            FAILED_RECEIVER_PROCESSING = 9,
            FAILED_DA = 10,
            FAILED_DA_FINAL = 11,
            REFUNDED_TXN = 12,
            REFUND_FAILED = 13,
            REFUND_FAILED_PROCESSING = 14,
            REFUND_FAILED_DA = 15,
            EXPIRED_TXN = 16,
            AUTH_CANCELED = 17,
            AUTH_CANCEL_FAILED_PROCESSING = 18,
            AUTH_CANCEL_FAILED = 19,
            COLLECT_INIT = 20,
            COLLECT_SUCCESS = 21,
            COLLECT_FAILED = 22,
            COLLECT_FAILED_RISK = 23,
            COLLECT_REJECTED = 24,
            COLLECT_EXPIRED = 25,
            COLLECT_CANCELED = 26,
            COLLECT_CANCELLING = 27,
            IN_REVIEW = 28
        }
    }

    /** Properties of a WebMessageInfo. */
    interface IWebMessageInfo {

        /** WebMessageInfo key */
        key: proto.IMessageKey;

        /** WebMessageInfo message */
        message?: (proto.IMessage|null);

        /** WebMessageInfo messageTimestamp */
        messageTimestamp?: (number|Long|null);

        /** WebMessageInfo status */
        status?: (proto.WebMessageInfo.WebMessageInfoStatus|null);

        /** WebMessageInfo participant */
        participant?: (string|null);

        /** WebMessageInfo messageC2STimestamp */
        messageC2STimestamp?: (number|Long|null);

        /** WebMessageInfo ignore */
        ignore?: (boolean|null);

        /** WebMessageInfo starred */
        starred?: (boolean|null);

        /** WebMessageInfo broadcast */
        broadcast?: (boolean|null);

        /** WebMessageInfo pushName */
        pushName?: (string|null);

        /** WebMessageInfo mediaCiphertextSha256 */
        mediaCiphertextSha256?: (Uint8Array|null);

        /** WebMessageInfo multicast */
        multicast?: (boolean|null);

        /** WebMessageInfo urlText */
        urlText?: (boolean|null);

        /** WebMessageInfo urlNumber */
        urlNumber?: (boolean|null);

        /** WebMessageInfo messageStubType */
        messageStubType?: (proto.WebMessageInfo.WebMessageInfoStubType|null);

        /** WebMessageInfo clearMedia */
        clearMedia?: (boolean|null);

        /** WebMessageInfo messageStubParameters */
        messageStubParameters?: (string[]|null);

        /** WebMessageInfo duration */
        duration?: (number|null);

        /** WebMessageInfo labels */
        labels?: (string[]|null);

        /** WebMessageInfo paymentInfo */
        paymentInfo?: (proto.IPaymentInfo|null);

        /** WebMessageInfo finalLiveLocation */
        finalLiveLocation?: (proto.ILiveLocationMessage|null);

        /** WebMessageInfo quotedPaymentInfo */
        quotedPaymentInfo?: (proto.IPaymentInfo|null);

        /** WebMessageInfo ephemeralStartTimestamp */
        ephemeralStartTimestamp?: (number|Long|null);

        /** WebMessageInfo ephemeralDuration */
        ephemeralDuration?: (number|null);

        /** WebMessageInfo ephemeralOffToOn */
        ephemeralOffToOn?: (boolean|null);

        /** WebMessageInfo ephemeralOutOfSync */
        ephemeralOutOfSync?: (boolean|null);

        /** WebMessageInfo bizPrivacyStatus */
        bizPrivacyStatus?: (proto.WebMessageInfo.WebMessageInfoBizPrivacyStatus|null);

        /** WebMessageInfo verifiedBizName */
        verifiedBizName?: (string|null);

        /** WebMessageInfo mediaData */
        mediaData?: (proto.IMediaData|null);

        /** WebMessageInfo photoChange */
        photoChange?: (proto.IPhotoChange|null);
    }

    /** Represents a WebMessageInfo. */
    class WebMessageInfo implements IWebMessageInfo {

        /**
         * Constructs a new WebMessageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IWebMessageInfo);

        /** WebMessageInfo key. */
        public key: proto.IMessageKey;

        /** WebMessageInfo message. */
        public message?: (proto.IMessage|null);

        /** WebMessageInfo messageTimestamp. */
        public messageTimestamp: (number|Long);

        /** WebMessageInfo status. */
        public status: proto.WebMessageInfo.WebMessageInfoStatus;

        /** WebMessageInfo participant. */
        public participant: string;

        /** WebMessageInfo messageC2STimestamp. */
        public messageC2STimestamp: (number|Long);

        /** WebMessageInfo ignore. */
        public ignore: boolean;

        /** WebMessageInfo starred. */
        public starred: boolean;

        /** WebMessageInfo broadcast. */
        public broadcast: boolean;

        /** WebMessageInfo pushName. */
        public pushName: string;

        /** WebMessageInfo mediaCiphertextSha256. */
        public mediaCiphertextSha256: Uint8Array;

        /** WebMessageInfo multicast. */
        public multicast: boolean;

        /** WebMessageInfo urlText. */
        public urlText: boolean;

        /** WebMessageInfo urlNumber. */
        public urlNumber: boolean;

        /** WebMessageInfo messageStubType. */
        public messageStubType: proto.WebMessageInfo.WebMessageInfoStubType;

        /** WebMessageInfo clearMedia. */
        public clearMedia: boolean;

        /** WebMessageInfo messageStubParameters. */
        public messageStubParameters: string[];

        /** WebMessageInfo duration. */
        public duration: number;

        /** WebMessageInfo labels. */
        public labels: string[];

        /** WebMessageInfo paymentInfo. */
        public paymentInfo?: (proto.IPaymentInfo|null);

        /** WebMessageInfo finalLiveLocation. */
        public finalLiveLocation?: (proto.ILiveLocationMessage|null);

        /** WebMessageInfo quotedPaymentInfo. */
        public quotedPaymentInfo?: (proto.IPaymentInfo|null);

        /** WebMessageInfo ephemeralStartTimestamp. */
        public ephemeralStartTimestamp: (number|Long);

        /** WebMessageInfo ephemeralDuration. */
        public ephemeralDuration: number;

        /** WebMessageInfo ephemeralOffToOn. */
        public ephemeralOffToOn: boolean;

        /** WebMessageInfo ephemeralOutOfSync. */
        public ephemeralOutOfSync: boolean;

        /** WebMessageInfo bizPrivacyStatus. */
        public bizPrivacyStatus: proto.WebMessageInfo.WebMessageInfoBizPrivacyStatus;

        /** WebMessageInfo verifiedBizName. */
        public verifiedBizName: string;

        /** WebMessageInfo mediaData. */
        public mediaData?: (proto.IMediaData|null);

        /** WebMessageInfo photoChange. */
        public photoChange?: (proto.IPhotoChange|null);

        /**
         * Creates a new WebMessageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WebMessageInfo instance
         */
        public static create(properties?: proto.IWebMessageInfo): proto.WebMessageInfo;

        /**
         * Encodes the specified WebMessageInfo message. Does not implicitly {@link proto.WebMessageInfo.verify|verify} messages.
         * @param message WebMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IWebMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WebMessageInfo message, length delimited. Does not implicitly {@link proto.WebMessageInfo.verify|verify} messages.
         * @param message WebMessageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IWebMessageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WebMessageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WebMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.WebMessageInfo;

        /**
         * Decodes a WebMessageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WebMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.WebMessageInfo;

        /**
         * Verifies a WebMessageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WebMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WebMessageInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.WebMessageInfo;

        /**
         * Creates a plain object from a WebMessageInfo message. Also converts values to other types if specified.
         * @param message WebMessageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.WebMessageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WebMessageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace WebMessageInfo {

        /** WebMessageInfoStatus enum. */
        enum WebMessageInfoStatus {
            ERROR = 0,
            PENDING = 1,
            SERVER_ACK = 2,
            DELIVERY_ACK = 3,
            READ = 4,
            PLAYED = 5
        }

        /** WebMessageInfoStubType enum. */
        enum WebMessageInfoStubType {
            UNKNOWN = 0,
            REVOKE = 1,
            CIPHERTEXT = 2,
            FUTUREPROOF = 3,
            NON_VERIFIED_TRANSITION = 4,
            UNVERIFIED_TRANSITION = 5,
            VERIFIED_TRANSITION = 6,
            VERIFIED_LOW_UNKNOWN = 7,
            VERIFIED_HIGH = 8,
            VERIFIED_INITIAL_UNKNOWN = 9,
            VERIFIED_INITIAL_LOW = 10,
            VERIFIED_INITIAL_HIGH = 11,
            VERIFIED_TRANSITION_ANY_TO_NONE = 12,
            VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
            VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
            VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
            VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
            VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
            VERIFIED_TRANSITION_NONE_TO_LOW = 18,
            VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
            GROUP_CREATE = 20,
            GROUP_CHANGE_SUBJECT = 21,
            GROUP_CHANGE_ICON = 22,
            GROUP_CHANGE_INVITE_LINK = 23,
            GROUP_CHANGE_DESCRIPTION = 24,
            GROUP_CHANGE_RESTRICT = 25,
            GROUP_CHANGE_ANNOUNCE = 26,
            GROUP_PARTICIPANT_ADD = 27,
            GROUP_PARTICIPANT_REMOVE = 28,
            GROUP_PARTICIPANT_PROMOTE = 29,
            GROUP_PARTICIPANT_DEMOTE = 30,
            GROUP_PARTICIPANT_INVITE = 31,
            GROUP_PARTICIPANT_LEAVE = 32,
            GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
            BROADCAST_CREATE = 34,
            BROADCAST_ADD = 35,
            BROADCAST_REMOVE = 36,
            GENERIC_NOTIFICATION = 37,
            E2E_IDENTITY_CHANGED = 38,
            E2E_ENCRYPTED = 39,
            CALL_MISSED_VOICE = 40,
            CALL_MISSED_VIDEO = 41,
            INDIVIDUAL_CHANGE_NUMBER = 42,
            GROUP_DELETE = 43,
            GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
            CALL_MISSED_GROUP_VOICE = 45,
            CALL_MISSED_GROUP_VIDEO = 46,
            PAYMENT_CIPHERTEXT = 47,
            PAYMENT_FUTUREPROOF = 48,
            PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
            PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
            PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
            PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
            PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
            PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
            PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
            PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
            PAYMENT_ACTION_REQUEST_DECLINED = 57,
            PAYMENT_ACTION_REQUEST_EXPIRED = 58,
            PAYMENT_ACTION_REQUEST_CANCELLED = 59,
            BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
            BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
            BIZ_INTRO_TOP = 62,
            BIZ_INTRO_BOTTOM = 63,
            BIZ_NAME_CHANGE = 64,
            BIZ_MOVE_TO_CONSUMER_APP = 65,
            BIZ_TWO_TIER_MIGRATION_TOP = 66,
            BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
            OVERSIZED = 68,
            GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
            GROUP_V4_ADD_INVITE_SENT = 70,
            GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
            CHANGE_EPHEMERAL_SETTING = 72,
            E2E_DEVICE_CHANGED = 73,
            VIEWED_ONCE = 74,
            E2E_ENCRYPTED_NOW = 75,
            BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76,
            BLUE_MSG_BSP_FB_TO_SELF_FB = 77,
            BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78,
            BLUE_MSG_BSP_FB_UNVERIFIED = 79,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80,
            BLUE_MSG_BSP_FB_VERIFIED = 81,
            BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82,
            BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83,
            BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84,
            BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85,
            BLUE_MSG_BSP_PREMISE_VERIFIED = 86,
            BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87,
            BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88,
            BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89,
            BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90,
            BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91,
            BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92,
            BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93,
            BLUE_MSG_SELF_FB_UNVERIFIED = 94,
            BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95,
            BLUE_MSG_SELF_FB_VERIFIED = 96,
            BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97,
            BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98,
            BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99,
            BLUE_MSG_SELF_PREMISE_VERIFIED = 100,
            BLUE_MSG_TO_BSP_FB = 101,
            BLUE_MSG_TO_CONSUMER = 102,
            BLUE_MSG_TO_SELF_FB = 103,
            BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104,
            BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105,
            BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106,
            BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107,
            BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108,
            BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109,
            BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110,
            BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113,
            BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114,
            BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115,
            BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116,
            BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117,
            E2E_IDENTITY_UNAVAILABLE = 118,
            GROUP_CREATING = 119,
            GROUP_CREATE_FAILED = 120,
            GROUP_BOUNCED = 121,
            BLOCK_CONTACT = 122,
            EPHEMERAL_SETTING_NOT_APPLIED = 123,
            SYNC_FAILED = 124,
            SYNCING = 125,
            BIZ_PRIVACY_MODE_INIT_FB = 126,
            BIZ_PRIVACY_MODE_INIT_BSP = 127,
            BIZ_PRIVACY_MODE_TO_FB = 128,
            BIZ_PRIVACY_MODE_TO_BSP = 129
        }

        /** WebMessageInfoBizPrivacyStatus enum. */
        enum WebMessageInfoBizPrivacyStatus {
            E2EE = 0,
            FB = 2,
            BSP = 1,
            BSP_AND_FB = 3
        }
    }
}
